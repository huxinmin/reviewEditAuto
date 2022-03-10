import ignore from 'ignore';

const path = require('path');
const fs = require('fs');

/**
 * 加载ignore配置文件，并处理成数组
 * @param {*} ignoreFileName
 */
async function loadIgnorePatterns(ignoreFileName): Promise<string[]> {
  const ignorePath = path.resolve(process.cwd(), ignoreFileName);
  try {
    const ignores = fs.readFileSync(ignorePath, 'utf8');
    return ignores.split(/[\n\r]|\n\r/).filter((pattern) => Boolean(pattern));
  } catch (e) {
    return [];
  }
}

/**
 * 根据ignore配置过滤文件列表
 */
async function filterByIgnore(
  files: string[],
  ignoreFileName: string,
  ignoreRules,
  cwd = process.cwd(),
): Promise<string[]> {
  const ignorePatterns = await loadIgnorePatterns(ignoreFileName);
  const ig = ignore().add([...ignorePatterns, ...ignoreRules]);
  const filtered = files
    .map((raw) => (path.isAbsolute(raw) ? raw : path.resolve(cwd, raw)))
    .map((raw) => path.relative(cwd, raw))
    .filter((filePath) => !ig.ignores(filePath));

  return filtered;
}

export default filterByIgnore;
