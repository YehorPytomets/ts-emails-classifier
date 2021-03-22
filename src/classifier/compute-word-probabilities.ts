import { Word } from '../word';
import { Count, WordsProbabilities } from './types';

export default function computeWordProbabilities(counts: Record<Word, Count>,
                                                 allWordsCount: Count): WordsProbabilities {
  const initialProbabilities: WordsProbabilities = {};
  return Object
    .entries(counts)
    .reduce((probabilities: WordsProbabilities, [word, count]: [Word, Count]) => {
      probabilities[word] = count / allWordsCount;
      return probabilities;
    }, initialProbabilities);
}
