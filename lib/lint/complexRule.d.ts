import type { IComplexRuleParams, ILintRes } from './types';
declare const complexRule: ({ message, line, min, column, filePath, }: IComplexRuleParams) => Omit<ILintRes, 'author'> | null;
export default complexRule;
