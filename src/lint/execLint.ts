import {SEVERITY} from '../constants';
import blameFormat from '../git/blameFormat';
import getFileName from '../utils/getFileName';
import complexRule from './complexRule';
import filterByBlame from './filterByBlame';
import getLevel from './getLevel';
import {ILintRes} from './types';

const {CLIEngine} = require('eslint');

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
  const lint = new CLIEngine({
    useEslintrc: useOutRc,
    resolvePluginsRelativeTo: useOutRc
      ? null
      : path.resolve(__dirname, '../../node_modules'),
    configFile: useOutRc ? null : path.resolve(__dirname, '../../.eslintrc.js'),
  });

  const reports = lint.executeOnFiles(paths).results;

  const needReports = reports.filter(
    (report) => report.errorCount || report.warningCount,
  );
  const result = [] as ILintRes[];
  const fileCount = paths.length;

  needReports.forEach(({messages, filePath}) => {
    const blames = blameFormat(filePath);

    for (let j = 0; j < messages.length; j++) {
      const {message, ruleId, line, column, severity} = messages[j];

      // 过滤掉该行，不属于在指定时间内的修改
      const filterBlame = filterByBlame({line, blames, since});

      if (!filterBlame.valid) {
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
          author: filterBlame.author,
          rule: ruleId,
          ...msgLevle,
        });
      }
    }
  });

  result.sort((i) => (i.level === SEVERITY.low ? 1 : -1));

  return {fileCount, result};
}

export default execLint;
