import {SEVERITY} from '../constants';

/**
 * 获取严重级别
 * @param {*} num
 */
function getLevel(num: number, isComplexity: boolean): string {
  if (isComplexity) {
    if (num > 20) {
      return SEVERITY.error;
    } else if (num > 15) {
      return SEVERITY.warning;
    } else if (num > 10) {
      return SEVERITY.normal;
    } else {
      return SEVERITY.low;
    }
  } else {
    if (num > 4) {
      return SEVERITY.error;
    } else if (num > 3) {
      return SEVERITY.warning;
    } else if (num > 2) {
      return SEVERITY.normal;
    } else {
      return SEVERITY.low;
    }
  }
}

export default getLevel;
