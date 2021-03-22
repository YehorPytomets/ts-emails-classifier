import { Word } from '../word';
import { Count } from './types';

export default function countWords(counts: Record<Word, Count>): Count {
  const initialCount = 0;
  return Object
    .entries(counts)
    .reduce((total: Count, [, count]: [Word, Count]) => {
      return total + count;
    }, initialCount);
}
