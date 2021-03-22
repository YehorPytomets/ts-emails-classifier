import { Class, ClassifiedResult } from './classified';

export default interface Classifier<T, C extends Class, R extends ClassifiedResult<T, C>> {
  test(data: T): ClassifiedResult<T, C>;
}
