import type { IComplexRuleParams, ILintRes } from './types';
declare const complexRule: ({ message, min, }: IComplexRuleParams) => Omit<ILintRes, 'author' | 'position' | 'fileName'> | null;
export default complexRule;
