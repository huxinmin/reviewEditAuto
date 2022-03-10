export interface IBlameFormatParams {
  start: number;
  file: string;
}
export interface IBlameFormatRes {
  author: string;
  date: string;
  line: number;
}
