import {ESLint} from 'eslint';
import getFileName from '../utils/getFileName';
import complexRule from './complexRule';
import filterByBlame from './filterByBlame';
import getLevel from './getLevel';
import {ILintRes} from './types';

const lint = new ESLint({
  useEslintrc: true,
});

async function execLint(
  paths: string[],
  min: number,
  since: string,
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

      // 过滤掉该行，不属于在指定时间内的修改
      const blames = filterByBlame({line, filePath, since});

      if (!blames.valid) {
        continue;
      }

      if (ruleId === 'complexity') {
        const complexity = complexRule({
          message,
          line,
          min,
          column,
          filePath,
        });
        if (complexity) {
          result.push({
            author: blames.author,
            ...complexity,
          });
        }
      } else {
        result.push({
          position: line + ',' + column,
          fileName: getFileName(filePath),
          message,
          level: getLevel(severity, false),
          author: blames.author,
        });
      }
    }
  });

  return {fileCount, result};
}

export default execLint;
