import { ILintRes, IScanParams } from './types';
/**
 * 执行lint
 * @param {*} scanParam 扫描参数
 * @param {*} min 最小代码复杂度 , 大于此值不会被添加到结果
 */
export default function (scanParam: IScanParams): Promise<{
    fileCount: number;
    result: ILintRes[];
}>;
