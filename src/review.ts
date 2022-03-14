#!/usr/bin/env node
import lint from './lint';
import hanleResult from './utils/handleResult';
import logger from './utils/logger';

async function review(param) {
  logger.loading('excuting code review...');

  const start = Date.now();

  const {
    min = 10, // 最小代码复杂度 , 大于此值不会被添加到结果
    rootPath = '',
    ignoreFileName = '.gitignore',
    ignoreRules = ['node_modules'],
    since = '1.week',
    filterLv = '',
    useOutRc = false, // use custom elintrc file
  } = param;

  const lintResult = await lint({
    rootPath,
    ignoreFileName,
    ignoreRules,
    min,
    since,
    filterLv,
    useOutRc,
  });

  logger.stop();

  const {fileCount, result} = lintResult;

  logger.success(
    `finished, takes [${
      Date.now() - start
    }] ms, linted [${fileCount}] files, had [${result.length}] problems`,
  );

  if (result.length) {
    logger.table(hanleResult(result), {
      columns: {
        1: {width: 80},
        2: {width: 50},
      },
    });
  } else {
    logger.info('well done!');
  }

  process.exit(0);
}

export default review;
