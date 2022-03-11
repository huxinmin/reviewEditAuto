import review from '../src/review';

async function test() {
  console.time();
  const result = await review({
    rootPath: '',
    extensions: '**/*.ts',
    ignoreRules: ['node_modules'],
    ignoreFileName: '.ignore',
  });
  console.log(result);
  console.timeEnd();
}

test();
