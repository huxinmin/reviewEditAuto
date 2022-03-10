import { IScanParams } from './types';
/**
 * 执行扫描
 * @param {*} path 扫描路径 - 默认为当前路径
 */
export default function scan(param: IScanParams): Promise<string[]>;
