import {ESLint} from 'eslint';
import getFileName from '../utils/getFileName';
import complexRule from './complexRule';
import getLevel from './getLevel';
import scan from './scan';
import {ILintRes, IScanParams} from './types';

const lint = new ESLint({
  useEslintrc: true,
});

async function executeOnFiles(
  paths: string[],
  min: number,
): Promise<{
  fileCount: number;
  result: ILintRes[];
}> {
  const reports = await lint.lintFiles(paths);
  const needReports = reports.filter(
    (report) => report.errorCount || report.warningCount,
  );
  const result = [] as ILintRes[];
  const fileCount = paths.length;

  needReports.forEach(({messages, filePath}) => {
    for (let j = 0; j < messages.length; j++) {
      const {message, ruleId, line, column, severity} = messages[j];
      console.log('message', filePath, messages[j]);
      if (ruleId === 'complexity') {
        const complexity = complexRule({
          message,
          line,
          min,
          column,
          filePath,
        });
        if (complexity) {
          result.push(complexity);
        }
      } else {
        result.push({
          position: line + ',' + column,
          fileName: getFileName(filePath),
          message,
          level: getLevel(severity, false),
        });
      }
    }
  });

  console.log('fileCount, funcCount, result', {fileCount, result});

  return {fileCount, result};
}

/**
 * 执行扫描
 * @param {*} scanParam 扫描参数，具体参见 c-scan
 * @param {*} min 最小代码复杂度 , 大于此值不会被添加到结果
 */
export default async function (scanParam: IScanParams): Promise<{
  fileCount: number;
  result: ILintRes[];
}> {
  const files = await scan(scanParam);

  return executeOnFiles(files, scanParam.min);
}
