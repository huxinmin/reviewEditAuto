import type {IBlameFormatRes} from './types';

const shell = require('shelljs');

/** 过滤出xx行代码最后一次的提交的作者和日期 */
const blameFormat = (file: string): IBlameFormatRes[] => {
  const {stdout} = shell.exec(`git blame --date=short ${file}`);
  const regx = /[^\(\)]+(?=\))/g;
  const formatStd = stdout
    .split('\n')
    .map((i: string) => i.match(regx))
    .filter(Boolean)
    .map((i: string[]) => {
      const arr = i[0].split(' ');
      return {
        author: arr[0],
        date: arr[1],
        line: Number(arr[2]),
      };
    });

  return formatStd as IBlameFormatRes[];
};

export default blameFormat;
