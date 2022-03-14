#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./lint", "./utils/handleResult", "./utils/logger"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var lint_1 = require("./lint");
    var handleResult_1 = require("./utils/handleResult");
    var logger_1 = require("./utils/logger");
    function review(param) {
        return __awaiter(this, void 0, void 0, function () {
            var start, _a, min, _b, rootPath, _c, ignoreFileName, _d, ignoreRules, _e, since, _f, filterLv, _g, useOutRc, lintResult, fileCount, result;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        logger_1.default.loading('excuting code review...');
                        start = Date.now();
                        _a = param.min, min = _a === void 0 ? 10 : _a, _b = param.rootPath, rootPath = _b === void 0 ? '' : _b, _c = param.ignoreFileName, ignoreFileName = _c === void 0 ? '.gitignore' : _c, _d = param.ignoreRules, ignoreRules = _d === void 0 ? ['node_modules'] : _d, _e = param.since, since = _e === void 0 ? '1.week' : _e, _f = param.filterLv, filterLv = _f === void 0 ? '' : _f, _g = param.useOutRc, useOutRc = _g === void 0 ? false : _g;
                        return [4 /*yield*/, (0, lint_1.default)({
                                rootPath: rootPath,
                                ignoreFileName: ignoreFileName,
                                ignoreRules: ignoreRules,
                                min: min,
                                since: since,
                                filterLv: filterLv,
                                useOutRc: useOutRc,
                            })];
                    case 1:
                        lintResult = _h.sent();
                        logger_1.default.stop();
                        fileCount = lintResult.fileCount, result = lintResult.result;
                        logger_1.default.success("finished, takes [".concat(Date.now() - start, "] ms, linted [").concat(fileCount, "] files, had [").concat(result.length, "] problems"));
                        if (result.length) {
                            logger_1.default.table((0, handleResult_1.default)(result));
                        }
                        else {
                            logger_1.default.info('well done!');
                        }
                        process.exit(0);
                        return [2 /*return*/];
                }
            });
        });
    }
    exports.default = review;
});
