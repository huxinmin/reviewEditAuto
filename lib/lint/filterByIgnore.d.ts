/**
 * 根据ignore配置过滤文件列表
 */
declare function filterByIgnore(files: string[], ignoreFileName: string, ignoreRules: any, cwd?: string): Promise<string[]>;
export default filterByIgnore;
