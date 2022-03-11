import {SEVERITY} from '../constants';

function getLevel(num: number, isComplexity: boolean): string {
  if (isComplexity) {
    if (num > 15) {
      return SEVERITY.error;
    }
    return SEVERITY.low;
  }
  if (num === 2) {
    return SEVERITY.error;
  }
  return SEVERITY.low;
}

export default getLevel;
