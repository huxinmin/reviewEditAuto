import git from './';

export default async ()=> {
 const logs = await git.log({
   "--pretty": "format: '%h - %an, %ad %cd : %s' ",
   "--since" : "2022-01-02" // 或者2.weeks
 })
}