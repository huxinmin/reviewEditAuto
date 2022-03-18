import {IBlameFormatRes} from '../git/types';
import {IReviewParams} from '../types';

export interface ILintRes {
  position: string;
  fileName: string;
  message: string;
  level: string;
  author: string;
  rule: string;
}

export interface IComplexRuleParams {
  message: string;
  min: number;
}

export interface IScanParams extends IReviewParams {
  min: number;
  since: string;
  filterLv: string;
  useOutRc: boolean;
}

export interface IFilterByBlameParams {
  line: number;
  blames: IBlameFormatRes[];
  since: string;
}
