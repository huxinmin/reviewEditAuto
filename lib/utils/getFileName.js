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
    /**
     * 提取文件名称
     * @param {*} filePath
     */
    function getFileName(filePath) {
        return filePath.replace(process.cwd(), '').trim();
    }
    exports.default = getFileName;
});
