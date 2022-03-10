const dayjs = require('dayjs');

const isAfter = (date: string, since: string): boolean => {
  if (since.indexOf('week') > 0) {
    const num = since.split('.')[0];
    const sinceDate = dayjs().subtract(num, 'week');
    return dayjs(date).isAfter(dayjs(sinceDate));
  } else {
    return dayjs(date).isAfter(dayjs(since));
  }
};

export default isAfter;
