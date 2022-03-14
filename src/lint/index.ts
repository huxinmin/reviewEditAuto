import getChanged from '../git/getChanged';
import execLint from './execLint';
import scan from './scan';
import {ILintRes, IScanParams} from './types';

/**
 * 执行lint
 * @param {*} scanParam 扫描参数
 * @param {*} min 最小代码复杂度 , 大于此值不会被添加到结果
 */
export default async function Lint(scanParam: IScanParams): Promise<{
  fileCount: number;
  result: ILintRes[];
}> {
  const {since, min, filterLv, useOutRc} = scanParam;
  const files = await scan(scanParam);

  const changedFiles = await getChanged(since);

  const needLintFiles = changedFiles.filter((i: string) => files.includes(i));

  return execLint(needLintFiles, min, since, filterLv, useOutRc);
}
