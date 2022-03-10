import {EXTENSIONS, IGNORE_FILE_NAME} from '../constants';
import filterByIgnore from './filterByIgnore';
import getScanFiles from './getScanFiles';
import {IScanParams} from './types';

/**
 * 默认参数
 */
const DEFAULT_PARAM = {
  rootPath: '',
  ignoreRules: [],
  extensions: EXTENSIONS,
  ignoreFileName: IGNORE_FILE_NAME,
};

/**
 * 执行扫描
 * @param {*} path 扫描路径 - 默认为当前路径
 */
export default async function scan(param: IScanParams): Promise<string[]> {
  const assignedParam = Object.assign(DEFAULT_PARAM, param);

  const {rootPath, extensions, ignoreRules, ignoreFileName} = assignedParam;

  const files = await getScanFiles(rootPath, extensions);

  return filterByIgnore(files, ignoreFileName, ignoreRules);
}
