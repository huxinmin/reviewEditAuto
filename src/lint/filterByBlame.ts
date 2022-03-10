import blameFormat from '../git/blameFormat';
import isAfter from '../utils/isAfter';
import {IFilterByBlameParams} from './types';

const filterByBlame = ({
  line,
  filePath,
  since,
}: IFilterByBlameParams): {valid: boolean; author: string} => {
  const blames = blameFormat({
    start: line,
    file: filePath,
  });

  const valid = isAfter(blames.date, since);

  return {
    valid,
    author: blames.author,
  };
};

export default filterByBlame;
