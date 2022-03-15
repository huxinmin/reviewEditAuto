(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../constants"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var constants_1 = require("../constants");
    var chalk = require('chalk');
    function genColorData(data, isExcel) {
        var level = data.level, message = data.message, fileName = data.fileName, position = data.position, author = data.author, rule = data.rule;
        var colorData = [];
        if (isExcel) {
            colorData.push(level);
            colorData.push(message);
        }
        else if (level === constants_1.SEVERITY.error) {
            colorData.push(chalk.red(level));
            colorData.push(chalk.whiteBright.bgRed.bold(message));
        }
        else {
            colorData.push(chalk.yellow(level));
            colorData.push(chalk.hex(constants_1.WARNING_COLOR).bgHex(constants_1.WARNING_BG_COLOR).bold(message));
        }
        colorData.push(isExcel
            ? "".concat(fileName, " [").concat(position, "]")
            : chalk.hex(constants_1.INFO_COLOR)("".concat(fileName, " [").concat(position, "]")));
        colorData.push(isExcel ? rule : chalk.magenta(rule));
        colorData.push(isExcel ? author : chalk.cyan(author));
        return colorData;
    }
    exports.default = genColorData;
});
