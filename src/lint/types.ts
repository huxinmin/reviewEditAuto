import {IReviewParams} from '../types';

export interface ILintRes {
  position: string;
  fileName: string;
  message: string;
  level: string;
  author: string;
}

export interface IComplexRuleParams {
  message: string;
  line: number;
  min: number;
  column: number;
  filePath: string;
}

export interface IScanParams extends IReviewParams {
  min: number;
  since: string;
}

export interface IFilterByBlameParams {
  line: number;
  filePath: string;
  since: string;
}
