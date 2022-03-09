import {
  INFO_COLOR,
  SEVERITY,
  WARNING_BG_COLOR,
  WARNING_COLOR,
} from '../constants';
import {ILintRes} from '../lint/types';

const chalk = require('chalk');

function genColorData(data: ILintRes) {
  const {level, message, fileName, position} = data;
  const colorData = [] as any[];
  if (level === SEVERITY.error) {
    colorData.push(chalk.red(level));
    colorData.push(chalk.whiteBright.bgRed.bold(message));
  } else if (level === SEVERITY.warning) {
    colorData.push(chalk.yellow(level));
    colorData.push(
      chalk.hex(WARNING_COLOR).bgHex(WARNING_BG_COLOR).bold(message),
    );
  } else {
    colorData.push(chalk.green(level));
    colorData.push(chalk.green(message));
  }
  return colorData.concat([chalk.hex(INFO_COLOR)(`${fileName} [${position}]`)]);
}

export default genColorData;
