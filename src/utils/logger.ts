import { Signale } from 'signale';
import { table } from 'table';

const chalk = require('chalk');
const ora = require('ora');

const spinner = ora('');

const options = {
    types: {
        error: {
            badge: ' ❌ ',
            color: 'red',
            label: '失败'
        },
        success: {
            badge: ' 🎉 ',
            color: 'green',
            label: '成功'
        },
        info: {
            badge: ' 🎅',
            color: 'blue',
            label: '信息'
        }
    }
};

const signale = new Signale(options);

export default {
    success: function (msg: string) {
        signale.success(chalk.green(msg));
    },
    error: function (msg: string) {
        signale.error(chalk.red(msg));
    },
    info: function (msg: string) {
        signale.info(chalk.green(msg));
    },
    loading: (title = 'loading...') => {
        spinner.text = ` 💫  ${title}  %s`;
        spinner.start();
    },
    stop: () => {
        spinner.stop();
        console.log();
    },
    table: (data: unknown[][], config?:any) => {
        console.log(table(data, config));
    }
};
