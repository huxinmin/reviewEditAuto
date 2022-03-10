/**
 * 获取glob扫描的文件列表
 * @param {*} rootPath 跟路径
 * @param {*} extensions 扩展
 */
declare function getScanFiles(rootPath: any, extensions: any): Promise<string[]>;
export default getScanFiles;
