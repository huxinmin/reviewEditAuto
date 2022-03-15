import type { IComplexRuleParams, ILintRes } from './types';
declare const complexRule: ({ message, min, }: IComplexRuleParams) => Omit<ILintRes, 'author' | 'position' | 'fileName' | 'rule'> | null;
export default complexRule;
