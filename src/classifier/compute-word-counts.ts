import { Word } from '../word';
import { Alpha, Count } from './types';

export default function computeWordCounts(words: Array<Word>,
                                          alpha: Alpha = 0): Record<Word, Count> {
  const wordCounts: Record<Word, Count> = {};
  return words.reduce((counts: Record<Word, Count>, word: Word) => {
    if (!counts[word]) {
      counts[word] = 1;
      counts[word] += alpha;
    } else {
      counts[word]++;
    }
    return counts;
  }, wordCounts);
}
