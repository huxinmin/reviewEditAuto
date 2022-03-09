import {IReviewParams} from '../types';

export interface ILintRes {
  position: string;
  fileName: string;
  message: string;
  level: string;
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
}
