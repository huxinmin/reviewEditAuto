(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../constants", "../utils/genColorData"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var constants_1 = require("../constants");
    var genColorData_1 = require("../utils/genColorData");
    var hanleResult = function (target, isExcel) {
        var result = target.map(function (i) { return (0, genColorData_1.default)(i, isExcel); });
        result.unshift(constants_1.TABLE_HEAD);
        return result;
    };
    exports.default = hanleResult;
});
