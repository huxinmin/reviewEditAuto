import {TABLE_HEAD} from '../constants';
import {ILintRes} from '../lint/types';
import genColorData from '../utils/genColorData';

const hanleResult = (target: ILintRes[]) => {
  const result = target.map(genColorData);
  result.unshift(TABLE_HEAD);
  console.log('sss', result);
  return result;
};

export default hanleResult;
