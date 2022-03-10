(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../git/blameFormat", "../utils/isAfter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var blameFormat_1 = require("../git/blameFormat");
    var isAfter_1 = require("../utils/isAfter");
    var filterByBlame = function (_a) {
        var line = _a.line, filePath = _a.filePath, since = _a.since;
        var blames = (0, blameFormat_1.default)({
            start: line,
            file: filePath,
        });
        var valid = (0, isAfter_1.default)(blames.date, since);
        return {
            valid: valid,
            author: blames.author,
        };
    };
    exports.default = filterByBlame;
});
