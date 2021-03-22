import { Word } from '../word';
import { Sample } from './sample';
import { Alpha, Count, Probability, WordsProbabilities } from './types';
import { EmailsProvider } from '../emails-provider';
import EmailLetter from '../email-letter';
import computeWordCounts from './compute-word-counts';
import countWords from './count-words';
import computeWordProbabilities from './compute-word-probabilities';

export default class EmailsSample implements Sample {

  private readonly allWordsCount: Count;
  private readonly words: WordsProbabilities;
  private readonly alpha: Alpha;

  public constructor(emails: EmailsProvider, alpha: Alpha) {
    const words = EmailsSample.getAllWords(emails);
    const counts = computeWordCounts(words, alpha);
    const allWordsCount = countWords(counts);
    this.words = computeWordProbabilities(counts, allWordsCount);
    this.allWordsCount = allWordsCount;
    this.alpha = alpha;
  }

  public wordsCount(): number {
    return this.allWordsCount;
  }

  public computeBelonging(word: Word, count: Count): Probability {
    const belongsToModelWithProbability = this.belongsToModel(word);
    if (!belongsToModelWithProbability) {
      return this.computeProbabilityWithAlpha(count);
    }
    return belongsToModelWithProbability;
  }

  private belongsToModel(word: Word): Probability {
    return this.words[word];
  }

  private computeProbabilityWithAlpha(count: Count): Probability {
    return count / (this.allWordsCount + this.alpha);
  }

  private static getAllWords(provider: EmailsProvider): Array<Word> {
    return provider
      .getEmails()
      .flatMap((email: EmailLetter) => email.words());
  }
}
