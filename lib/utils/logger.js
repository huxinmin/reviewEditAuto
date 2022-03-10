(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "signale", "table"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var signale_1 = require("signale");
    var table_1 = require("table");
    var chalk = require('chalk');
    var ora = require('ora');
    var spinner = ora('');
    var options = {
        types: {
            error: {
                badge: ' ❌ ',
                color: 'red',
                label: 'error',
            },
            success: {
                badge: ' 🎉 ',
                color: 'green',
                label: 'success',
            },
            info: {
                badge: ' 🎅',
                color: 'blue',
                label: 'info',
            },
        },
    };
    var signale = new signale_1.Signale(options);
    exports.default = {
        success: function (msg) {
            signale.success(chalk.green(msg));
        },
        error: function (msg) {
            signale.error(chalk.red(msg));
        },
        info: function (msg) {
            signale.info(chalk.green(msg));
        },
        loading: function (title) {
            if (title === void 0) { title = 'loading...'; }
            spinner.text = " \uD83D\uDCAB  ".concat(title, "  %s");
            spinner.start();
        },
        stop: function () {
            spinner.stop();
            console.log();
        },
        table: function (data, config) {
            console.log((0, table_1.table)(data, config));
        },
    };
});
