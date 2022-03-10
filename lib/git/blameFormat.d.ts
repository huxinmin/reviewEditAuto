import type { IBlameFormatParams, IBlameFormatRes } from './types';
/** 过滤出xx行代码最后一次的提交的作者和日期 */
declare const blameFormat: ({ start, file }: IBlameFormatParams) => IBlameFormatRes;
export default blameFormat;
