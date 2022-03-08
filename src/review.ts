#!/usr/bin/env node
import { TABLE_HEAD } from './constants';
import lint from './lint';
import genColorData from './utils/genColorData';
import logger from './utils/logger';


const hanleResult = (target)=> {
    const result = target.map(genColorData);
    result.unshift(TABLE_HEAD);
    return result;
};

async function review (param) {
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

review({min:11, rootPath: process.cwd()})

export default review