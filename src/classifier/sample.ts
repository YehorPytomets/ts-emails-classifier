import { Word } from '../word';
import { Count, Probability } from './types';

export interface Sample {
  wordsCount(): Count;
  computeBelonging(word: Word, occurrences: Count): Probability;
}

