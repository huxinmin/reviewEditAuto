(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var shell = require('shelljs');
    /** 过滤出xx行代码最后一次的提交的作者和日期 */
    var blameFormat = function (file) {
        var stdout = shell.exec("git blame --date=short ".concat(file)).stdout;
        var regx = /[^\(\)]+(?=\))/g;
        var formatStd = stdout
            .split('\n')
            .map(function (i) { return i.match(regx); })
            .filter(Boolean)
            .map(function (i) {
            var arr = i[0].split(' ').filter(Boolean);
            return {
                author: arr[0],
                date: arr[1],
                line: Number(arr[2]),
            };
        });
        return formatStd;
    };
    exports.default = blameFormat;
});
