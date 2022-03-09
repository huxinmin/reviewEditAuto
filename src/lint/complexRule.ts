import {MESSAGE_PREFIX, MESSAGE_SUFFIX} from '../constants';
import getFileName from '../utils/getFileName';
import getLevel from './getLevel';
import type {IComplexRuleParams, ILintRes} from './types';

/**
 * 提取mssage主要部分
 * @param {*} message
 */
function getMain(message: string) {
  return message.replace(MESSAGE_PREFIX, '').replace(MESSAGE_SUFFIX, '');
}

/**
 * 提取代码复杂度
 * @param {*} message
 */
function getComplexity(message: string) {
  const main = getMain(message);
  /(\d+)\./g.test(main);
  return +RegExp.$1;
}

const complexRule = ({
  message,
  line,
  min,
  column,
  filePath,
}: IComplexRuleParams): ILintRes | null => {
  const complexity = getComplexity(message);
  if (complexity >= min) {
    return {
      position: line + ',' + column,
      fileName: getFileName(filePath),
      message: `code is too complex，complexity is ${complexity}`,
      level: getLevel(complexity, true),
    };
  }
  return null;
};

export default complexRule;
