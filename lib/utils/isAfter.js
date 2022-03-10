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
    var dayjs = require('dayjs');
    var isAfter = function (date, since) {
        if (since.indexOf('week') > 0) {
            var num = since.split('.')[0];
            var sinceDate = dayjs().subtract(num, 'week');
            return dayjs(date).isAfter(dayjs(sinceDate));
        }
        else {
            return dayjs(date).isAfter(dayjs(since));
        }
    };
    exports.default = isAfter;
});
