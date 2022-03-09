#!/usr/bin/env node
import lint from './lint';
import {IReviewParams} from './types';
import hanleResult from './utils/handleResult';
import logger from './utils/logger';

async function review(param: IReviewParams) {
  logger.loading('excuting code review...');

  const start = Date.now();

  const {
    min = 10, //最小代码复杂度 , 大于此值不会被添加到结果
    rootPath = '',
    ignoreFileName = '.gitignore',
    ignoreRules = ['node_modules'],
  } = param;

  const lintResult = await lint({
    rootPath,
    ignoreFileName,
    ignoreRules,
    min,
  });

  logger.stop();

  const {fileCount, result} = lintResult;

  logger.success(
    `检测完成,耗费${
      Date.now() - start
    }ms，共检测【${fileCount}】个文件，其中可能存在问题【${result.length}】个`,
  );

  if (result.length) {
    logger.table(hanleResult(result));
  } else {
    logger.info('你的代码非常棒！');
  }

  process.exit(0);
}

review({min: 11});

export default review;
