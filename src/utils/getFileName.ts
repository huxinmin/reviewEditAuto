/**
 * 提取文件名称
 * @param {*} filePath
 */
function getFileName(filePath: string) {
  return filePath.replace(process.cwd(), '').trim();
}
export default getFileName;
