var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        define(["require", "exports", "../constants", "../utils/getFileName", "./complexRule", "./filterByBlame", "./getLevel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var constants_1 = require("../constants");
    var getFileName_1 = require("../utils/getFileName");
    var complexRule_1 = require("./complexRule");
    var filterByBlame_1 = require("./filterByBlame");
    var getLevel_1 = require("./getLevel");
    var CLIEngine = require('eslint').CLIEngine;
    var path = require('path');
    function execLint(paths, min, since, filterLv, useOutRc) {
        return __awaiter(this, void 0, void 0, function () {
            var lint, reports, needReports, result, fileCount;
            return __generator(this, function (_a) {
                lint = new CLIEngine({
                    useEslintrc: useOutRc,
                    resolvePluginsRelativeTo: useOutRc
                        ? null
                        : path.resolve(__dirname, '../../node_modules'),
                    configFile: useOutRc ? null : path.resolve(__dirname, '../../.eslintrc.js'),
                });
                reports = lint.executeOnFiles(paths).results;
                needReports = reports.filter(function (report) { return report.errorCount || report.warningCount; });
                result = [];
                fileCount = paths.length;
                needReports.forEach(function (_a) {
                    var messages = _a.messages, filePath = _a.filePath;
                    for (var j = 0; j < messages.length; j++) {
                        var _b = messages[j], message = _b.message, ruleId = _b.ruleId, line = _b.line, column = _b.column, severity = _b.severity;
                        // 过滤掉该行，不属于在指定时间内的修改
                        var blames = (0, filterByBlame_1.default)({ line: line, filePath: filePath, since: since });
                        if (!blames.valid) {
                            continue;
                        }
                        var msgLevle = void 0;
                        if (ruleId === 'complexity') {
                            msgLevle = (0, complexRule_1.default)({
                                message: message,
                                min: min,
                            });
                        }
                        else {
                            msgLevle = {
                                message: message,
                                level: (0, getLevel_1.default)(severity, false),
                            };
                        }
                        if (msgLevle && (msgLevle === null || msgLevle === void 0 ? void 0 : msgLevle.level) !== filterLv) {
                            result.push(__assign({ position: "".concat(line, ",").concat(column), fileName: (0, getFileName_1.default)(filePath), author: blames.author, rule: ruleId }, msgLevle));
                        }
                    }
                });
                result.sort(function (i) { return (i.level === constants_1.SEVERITY.low ? 1 : -1); });
                return [2 /*return*/, { fileCount: fileCount, result: result }];
            });
        });
    }
    exports.default = execLint;
});
