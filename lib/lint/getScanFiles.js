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
    var glob = require('glob');
    /**
     * 获取glob扫描的文件列表
     * @param {*} rootPath 跟路径
     * @param {*} extensions 扩展
     */
    function getScanFiles(rootPath, extensions) {
        return new Promise(function (resolve) {
            glob("".concat(rootPath).concat(extensions), { dot: true, ignore: constants_1.DEFAULT_IGNORE_PATTERNS, cwd: rootPath }, function (err, files) {
                if (err) {
                    console.log(err);
                    process.exit(1);
                }
                resolve(files);
            });
        });
    }
    exports.default = getScanFiles;
});
