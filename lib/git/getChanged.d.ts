/**
 * 返回指定日期内修改过的文件列表
 * @param since
 * @returns
 */
declare const getChanged: (since: string) => Promise<string[]>;
export default getChanged;
