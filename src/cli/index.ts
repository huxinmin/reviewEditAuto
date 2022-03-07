import yargs from 'yargs';
import review from './review';

const pkg = require('../../package.json');

function main () {
  yargs.command('review', 'excute code review', {}, review);

  yargs.command('version', 'print version', {}, () => {
    console.log(pkg.version);
  });

  yargs.argv;
};

main();