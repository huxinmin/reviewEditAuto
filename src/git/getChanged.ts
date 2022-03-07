import git from './';

const getChanged =  async ()=> {
 const logs = await git.log({
   "--since" : "2022-01-02" // 或者 2.weeks, 2 years 1 day 3 minutes ago, 2022-01-02
 })
 const first = logs.all[logs.all.length - 1].hash;
 const latest = logs.latest?.hash;
 const diffRes = await git.diff({
   `${first}`: `${latest}`,
   "--stat": ""
 }, (err)=> {
    console.log(err)
 });
 console.log(diffRes)
}

getChanged()

export default getChanged