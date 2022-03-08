import type { IFilterLineParams } from './types';

const shell = require('shelljs');

/** 过滤出每行代码最后一次的提交 */
const filterLine =  async ({since, start, end, file}: IFilterLineParams)=> {
  const { stdout } = shell.exec(`git blame --since=${since} -L ${start},${end} ${file}`)
  console.log('stdout',stdout.split('\n'))
}

filterLine({
  since: '1.week',
  start: 1,
  end: 10,
  file: '.eslintrc.js'
});

export default filterLine