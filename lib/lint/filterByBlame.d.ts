import { IFilterByBlameParams } from './types';
declare const filterByBlame: ({ line, filePath, since, }: IFilterByBlameParams) => {
    valid: boolean;
    author: string;
};
export default filterByBlame;
