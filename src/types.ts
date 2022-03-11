export interface IReviewParams {
  min?: number; // 最小代码复杂度 , 大于此值不会被添加到结果
  rootPath?: string;
  ignoreFileName?: string;
  ignoreRules?: string[];
  since?: string; // 从何时开始，有2种写法：2.weeks, 2022-01-02
  filterLv?: string;
}
