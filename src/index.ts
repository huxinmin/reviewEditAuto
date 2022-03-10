#!/usr/bin/env node
import review from './review';

const yargs = require('yargs');

const pkg = require('../package.json');

function main() {
  yargs.command('code', 'excute code review', {}, review);

  yargs.command('version', 'print version', {}, () => {
    console.log(pkg.version);
  });

  yargs.argv;
}

main();
