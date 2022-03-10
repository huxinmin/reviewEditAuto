(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../constants", "../utils/getFileName", "./getLevel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var constants_1 = require("../constants");
    var getFileName_1 = require("../utils/getFileName");
    var getLevel_1 = require("./getLevel");
    /**
     * 提取mssage主要部分
     * @param {*} message
     */
    function getMain(message) {
        return message.replace(constants_1.MESSAGE_PREFIX, '').replace(constants_1.MESSAGE_SUFFIX, '');
    }
    /**
     * 提取代码复杂度
     * @param {*} message
     */
    function getComplexity(message) {
        var main = getMain(message);
        /(\d+)\./g.test(main);
        return +RegExp.$1;
    }
    var complexRule = function (_a) {
        var message = _a.message, line = _a.line, min = _a.min, column = _a.column, filePath = _a.filePath;
        var complexity = getComplexity(message);
        if (complexity >= min) {
            return {
                position: line + ',' + column,
                fileName: (0, getFileName_1.default)(filePath),
                message: "code is too complex\uFF0Ccomplexity is ".concat(complexity),
                level: (0, getLevel_1.default)(complexity, true),
            };
        }
        return null;
    };
    exports.default = complexRule;
});
