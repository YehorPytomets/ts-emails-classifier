import { EmailsProvider } from '../emails-provider';
import EmailsSample from './emails-sample';
import EmailLetter from '../email-letter';
import computePriorProbability from './compute-prior-probability';
import computeWordCounts from './compute-word-counts';
import { ClassifiedEmail } from './email-classifier';
import { Word } from '../word';
import { Alpha, Count, Probability } from './types';

export function emailsClassification(): EmailsModelBuilder {
  return new EmailsModelBuilder();
}

interface Classifier {
  classify(email: EmailLetter): ClassifiedEmail;
}

export class MultinomialNaiveBayesClassifier implements Classifier {

  private ham!: EmailsSample;
  private spam!: EmailsSample;
  private emailIsHamGuess!: Probability;
  private emailIsSpamGuess!: Probability;
  private readonly alpha: Alpha;

  public constructor(ctx: EmailsModelContext) {
    this.alpha = ctx.alpha;
    this.ham = ctx.ham;
    this.spam = ctx.spam;
    this.computeEmailIsHamGuess(ctx.trainData.ham.getEmails(), ctx.trainData.spam.getEmails());
    this.computeEmailIsSpamGuess(ctx.trainData.spam.getEmails(), ctx.trainData.ham.getEmails());
  }

  public classify(email: EmailLetter): ClassifiedEmail {
    const wordCounts = computeWordCounts(email.words());
    const emailIsHamGuess = this.computeGuess(wordCounts, this.ham, this.emailIsHamGuess);
    const emailIsSpamGuess = this.computeGuess(wordCounts, this.spam, this.emailIsSpamGuess);
    return {
      data: email,
      classes: {
        'ham': emailIsHamGuess,
        'spam': emailIsSpamGuess,
      },
    };
  }

  private computeGuess(words: Record<Word, Count>,
    sample: EmailsSample,
    initialGuess: Probability): Probability {
    return Object
      .entries(words)
      .reduce((guess: Probability, [word, count]: [Word, Count]) => {
        const wordProbability = sample.computeBelonging(word, count);
        return guess * wordProbability;
      }, initialGuess);
  }

  private computeEmailIsHamGuess(ham: Array<EmailLetter>, spam: Array<EmailLetter>): void {
    this.emailIsHamGuess = computePriorProbability(ham.length, spam.length);
  }

  private computeEmailIsSpamGuess(spam: Array<EmailLetter>, ham: Array<EmailLetter>): void {
    this.emailIsSpamGuess = computePriorProbability(spam.length, ham.length);
  }
}

type ClassifierCreator = (ctx: EmailsModelContext) => Classifier;

export type EmailsModelContext = {
  trainData: EmailsTrainData;
  ham: EmailsSample;
  spam: EmailsSample;
  alpha: number;
}

export function multinomialNaiveBayes(): ClassifierCreator {
  return (ctx: EmailsModelContext) =>  {
    return new MultinomialNaiveBayesClassifier(ctx);
  }
}

export type EmailsTrainData = {
  ham: EmailsProvider;
  spam: EmailsProvider;
}

export class EmailsModel {

  private readonly context: EmailsModelContext;
  private readonly classifierCreator: ClassifierCreator;

  public constructor(builder: EmailsModelBuilder) {
    this.context = builder.context();
    this.classifierCreator = builder.classifier();
  }

  predict(email: EmailLetter): ClassifiedEmail {
    return this.classifierCreator(this.context).classify(email);
  }
}

export class EmailsModelBuilder {

  private alpha = 0;
  private classifierCreator: ClassifierCreator | null = null;
  private ham: EmailsSample | null = null;
  private spam: EmailsSample | null = null;
  private trainEmails: EmailsTrainData | null = null;

  public withAlpha(alpha: number): EmailsModelBuilder {
    this.alpha = alpha;
    return this;
  }

  public withClassifier(creator: ClassifierCreator)
    : EmailsModelBuilder {
    this.classifierCreator = creator;
    return this;
  }

  public train(data: EmailsTrainData): EmailsModel {
    this.ham = new EmailsSample(data.ham, this.alpha);
    this.spam = new EmailsSample(data.spam, this.alpha);
    this.trainEmails = data;
    return new EmailsModel(this);
  }

  public context(): EmailsModelContext {
    return {
      ham: this.ham!,
      spam: this.spam!,
      alpha: this.alpha,
      trainData: this.trainEmails!,
    };
  }

  public classifier(): ClassifierCreator {
    return this.classifierCreator!;
  }
}
