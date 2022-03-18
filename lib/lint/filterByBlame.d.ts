import { IFilterByBlameParams } from './types';
declare const filterByBlame: ({ line, blames, since, }: IFilterByBlameParams) => {
    valid: boolean;
    author?: string;
};
export default filterByBlame;
