import {
  INFO_COLOR,
  SEVERITY,
  WARNING_BG_COLOR,
  WARNING_COLOR,
} from '../constants';
import {ILintRes} from '../lint/types';

const chalk = require('chalk');

function genColorData(data: ILintRes, isExcel: boolean) {
  const {level, message, fileName, position, author, rule} = data;
  const colorData = [] as string[];

  if (isExcel) {
    colorData.push(level);
    colorData.push(message);
  } else if (level === SEVERITY.error) {
    colorData.push(chalk.red(level));
    colorData.push(chalk.whiteBright.bgRed.bold(message));
  } else {
    colorData.push(chalk.yellow(level));
    colorData.push(
      chalk.hex(WARNING_COLOR).bgHex(WARNING_BG_COLOR).bold(message),
    );
  }

  colorData.push(
    isExcel
      ? `${fileName} [${position}]`
      : chalk.hex(INFO_COLOR)(`${fileName} [${position}]`),
  );
  colorData.push(isExcel ? rule : chalk.magenta(rule));
  colorData.push(isExcel ? author : chalk.cyan(author));

  return colorData;
}

export default genColorData;
