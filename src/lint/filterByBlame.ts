import isAfter from '../utils/isAfter';
import {IFilterByBlameParams} from './types';

const filterByBlame = ({
  line,
  blames,
  since,
}: IFilterByBlameParams): {valid: boolean; author?: string} => {
  const validBlame = blames.find(
    (blame) => blame.line === line && isAfter(blame.date, since),
  );

  return {
    valid: !!validBlame,
    author: validBlame?.author,
  };
};

export default filterByBlame;
