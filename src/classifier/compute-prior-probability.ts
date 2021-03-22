import { Count, Probability } from './types';

export default function computePriorProbability(sampleA: Count, sampleB: Count): Probability {
  return sampleA / (sampleA + sampleB);
}
