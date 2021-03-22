import { ClassifiedResult } from './classified';
import Classifier from './classifier';
import EmailLetter from '../email-letter';
import EmailsSample from './emails-sample';
import computeWordCounts from './compute-word-counts';
import { Alpha, Count, Probability } from './types';
import { Word } from '../word';
import { EmailsProvider } from '../emails-provider';
import computePriorProbability from './compute-prior-probability';

export default class EmailClassifier implements Classifier<EmailLetter, EmailClass, ClassifiedEmail> {

  private ham!: EmailsSample;
  private spam!: EmailsSample;
  private emailIsHamGuess!: Probability;
  private emailIsSpamGuess!: Probability;
  private readonly alpha: Alpha;

  public constructor(ham: EmailsProvider, spam: EmailsProvider, alpha: Alpha) {
    this.alpha = alpha;
    this.buildModel(ham, spam);
  }

  private buildModel(ham: EmailsProvider, spam: EmailsProvider) {
    this.ham = new EmailsSample(ham, this.alpha);
    this.spam = new EmailsSample(spam, this.alpha);
    this.computeEmailIsHamGuess(ham.getEmails(), spam.getEmails());
    this.computeEmailIsSpamGuess(spam.getEmails(), ham.getEmails());
  }

  public test(data: EmailLetter): ClassifiedEmail {
    const wordCounts = computeWordCounts(data.words(), this.alpha);
    const emailIsHamGuess = this.computeGuess(wordCounts, this.ham, this.emailIsHamGuess);
    const emailIsSpamGuess = this.computeGuess(wordCounts, this.spam, this.emailIsSpamGuess);
    return {
      data,
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

  private computeEmailIsSpamGuess(ham: Array<EmailLetter>, spam: Array<EmailLetter>): void {
    this.emailIsSpamGuess = computePriorProbability(spam.length, ham.length);
  }
}

export type EmailClass = 'spam' | 'ham';
export type ClassifiedEmail = ClassifiedResult<EmailLetter, EmailClass>;
