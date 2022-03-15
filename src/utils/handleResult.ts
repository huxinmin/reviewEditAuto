import {TABLE_HEAD} from '../constants';
import {ILintRes} from '../lint/types';
import genColorData from '../utils/genColorData';

const hanleResult = (target: ILintRes[], isExcel: boolean) => {
  const result = target.map((i: ILintRes) => genColorData(i, isExcel));
  result.unshift(TABLE_HEAD);

  return result;
};

export default hanleResult;
