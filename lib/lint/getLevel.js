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
    function getLevel(num, isComplexity) {
        if (isComplexity) {
            if (num > 15) {
                return constants_1.SEVERITY.error;
            }
            return constants_1.SEVERITY.low;
        }
        if (num === 2) {
            return constants_1.SEVERITY.error;
        }
        return constants_1.SEVERITY.low;
    }
    exports.default = getLevel;
});
