import {DEFAULT_IGNORE_PATTERNS} from '../constants';

const glob = require('glob');

/**
 * 获取glob扫描的文件列表
 * @param {*} rootPath 跟路径
 * @param {*} extensions 扩展
 */
function getScanFiles(rootPath, extensions): Promise<string[]> {
  return new Promise((resolve) => {
    glob(
      `${rootPath}${extensions}`,
      {dot: true, ignore: DEFAULT_IGNORE_PATTERNS, cwd: rootPath},
      (err, files) => {
        if (err) {
          console.log(err);
          process.exit(1);
        }
        resolve(files);
      },
    );
  });
}

export default getScanFiles;
