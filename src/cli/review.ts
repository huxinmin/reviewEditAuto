#!/usr/bin/env node
import chalk from 'chalk';
import { INFO_COLOR, TABLE_HEAD, WARNING_BG_COLOR, WARNING_COLOR } from '../constants';
import lint from '../lint';
import logger from '../utils/logger';

function getColorData(data) {
    const { complexity, advice, funcName, fileName, funcType, position } = data;
    const colorData = [];
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

const hanleResult = target => {
    const result = target.map(getColorData);
    result.unshift(TABLE_HEAD);
    return result;
};

export default async function (param) {
    logger.loading('excuting code review...');

    const start = Date.now();

    const {
        min = 11,
        rootPath = '',
        defalutIgnore = true,
        ignoreFileName = '.gitignore',
        ignoreRules = ['node_modules']
    } = param;

    const ccResult = await lint({
        rootPath,
        defalutIgnore,
        ignoreFileName,
        ignoreRules
    }, min);

    logger.stop();

    const { fileCount, funcCount, result } = ccResult;

    logger.success(`检测完成,耗费${Date.now() - start}ms，共检测【${fileCount}】个文件，【${funcCount}】个函数，其中可能存在问题的函数【${result.length}】个`);

    if (result.length) {
        logger.table(hanleResult(result));
    } else {
        logger.info('你的代码非常棒！');
    }

    process.exit(0);

};