(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../utils/isAfter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var isAfter_1 = require("../utils/isAfter");
    var filterByBlame = function (_a) {
        var line = _a.line, blames = _a.blames, since = _a.since;
        var validBlame = blames.find(function (blame) { return blame.line === line && (0, isAfter_1.default)(blame.date, since); });
        return {
            valid: !!validBlame,
            author: validBlame === null || validBlame === void 0 ? void 0 : validBlame.author,
        };
    };
    exports.default = filterByBlame;
});
