import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';

const options: Partial<SimpleGitOptions> = {
   baseDir: process.cwd(),
   binary: 'git',
   maxConcurrentProcesses: 6,
};

// when setting all options in a single object
const git: SimpleGit = simpleGit(options);

export default git