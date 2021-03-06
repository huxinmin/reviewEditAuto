import git from './';

/**
 * 返回指定日期内修改过的文件列表
 * @param since
 * @returns
 */
const getChanged = async (since: string): Promise<string[]> => {
  const logs = await git.log({
    '--since': since, // 或者 2.weeks, 2 years 1 day 3 minutes ago, 2022-01-02
  });
  if (!logs.total) {
    console.log('nothing to review');
    process.exit(0);
  }
  const first = logs.all[logs.all.length - 1].hash;
  const latest = logs.latest?.hash || '';
  const diffRes = await git.diffSummary([first, latest, '--stat'], (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
  return diffRes.files.map((i) => i.file);
};

export default getChanged;
