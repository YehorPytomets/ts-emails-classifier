import { Probability } from './types';

export type ClassifiedResult<D, C extends Class> = {
  data: D;
  classes: Record<C, Probability>;
}

export type Class = string;
