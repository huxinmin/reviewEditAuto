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
    /**
     * 获取严重级别
     * @param {*} num
     */
    function getLevel(num, isComplexity) {
        if (isComplexity) {
            if (num > 20) {
                return constants_1.SEVERITY.error;
            }
            else if (num > 15) {
                return constants_1.SEVERITY.warning;
            }
            else if (num > 10) {
                return constants_1.SEVERITY.normal;
            }
            else {
                return constants_1.SEVERITY.low;
            }
        }
        else {
            if (num > 4) {
                return constants_1.SEVERITY.error;
            }
            else if (num > 3) {
                return constants_1.SEVERITY.warning;
            }
            else if (num > 2) {
                return constants_1.SEVERITY.normal;
            }
            else {
                return constants_1.SEVERITY.low;
            }
        }
    }
    exports.default = getLevel;
});
