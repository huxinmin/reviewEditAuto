import chalk from 'chalk';
import { INFO_COLOR, WARNING_BG_COLOR, WARNING_COLOR } from '../constants';

function genColorData(data) {
  const { complexity, advice, funcName, fileName, funcType, position } = data;
  const colorData = [] as any[];
  if (complexity > 15) {
      colorData.push(chalk.red(complexity));
      colorData.push(chalk.whiteBright.bgRed.bold(`${advice}重构`));
  } else if (complexity > 10) {
      colorData.push(chalk.yellow(complexity));
      colorData.push(chalk.hex(WARNING_COLOR).bgHex(WARNING_BG_COLOR).bold(`${advice}重构`));
  } else {
      colorData.push(chalk.green(complexity));
      colorData.push(chalk.green(`${advice}重构`));
  }
  return colorData.concat([
      chalk.hex(INFO_COLOR)(funcName),
      chalk.hex(INFO_COLOR)(funcType),
      chalk.hex(INFO_COLOR)(`${fileName} [${position}]`)
  ]);
}

export default genColorData