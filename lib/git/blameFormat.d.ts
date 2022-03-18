import type { IBlameFormatRes } from './types';
/** 过滤出xx行代码最后一次的提交的作者和日期 */
declare const blameFormat: (file: string) => IBlameFormatRes[];
export default blameFormat;
