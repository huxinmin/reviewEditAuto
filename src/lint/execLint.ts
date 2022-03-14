import {ESLint} from 'eslint';
import getFileName from '../utils/getFileName';
import complexRule from './complexRule';
import filterByBlame from './filterByBlame';
import getLevel from './getLevel';
import {ILintRes} from './types';

const path = require('path');

async function execLint(
  paths: string[],
  min: number,
  since: string,
  filterLv: string,
  useOutRc: boolean,
): Promise<{
  fileCount: number;
  result: ILintRes[];
}> {
  const lint = new ESLint({
    useEslintrc: useOutRc,
    overrideConfigFile: useOutRc
      ? null
      : path.resolve(__dirname, '../../.eslintrc.js'),
  });

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

      let msgLevle;

      if (ruleId === 'complexity') {
        msgLevle = complexRule({
          message,
          min,
        });
      } else {
        msgLevle = {
          message,
          level: getLevel(severity, false),
        };
      }

      if (msgLevle && msgLevle?.level !== filterLv) {
        result.push({
          position: `${line},${column}`,
          fileName: getFileName(filePath),
          author: blames.author,
          ...msgLevle,
        });
      }
    }
  });

  return {fileCount, result};
}

export default execLint;
