const review = require('../lib/cli/review');


async function test() {
  console.time();
  const result = await review({
      rootPath: '',
      extensions: '**/*.js',
      defalutIgnore: false,
      ignoreRules: ['node_modules', 'inner'],
      ignoreFileName: '.ignore'
  });
  console.log(result);
  console.timeEnd();
}

test();
