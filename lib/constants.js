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
    exports.MESSAGE_SUFFIX = exports.MESSAGE_PREFIX = exports.REG_FUNC_TYPE = exports.IGNORE_FILE_NAME = exports.DEFAULT_IGNORE_PATTERNS = exports.EXTENSIONS = exports.SEVERITY = exports.WARNING_COLOR = exports.WARNING_BG_COLOR = exports.INFO_COLOR = exports.TABLE_HEAD = void 0;
    exports.TABLE_HEAD = ['level', 'message', 'path', 'rule', 'author'];
    exports.INFO_COLOR = '#c0ffb3';
    exports.WARNING_BG_COLOR = '#f75f00';
    exports.WARNING_COLOR = '#f7e8f6';
    exports.SEVERITY = {
        low: 'low',
        error: 'high',
    };
    /**
     * 默认扫描扩展
     */
    exports.EXTENSIONS = '**/*.?(js|ts|jsx|tsx)';
    /**
     * 默认忽略文件夹
     */
    exports.DEFAULT_IGNORE_PATTERNS = [
        'node_modules/**',
        'build/**',
        'dist/**',
        'output/**',
    ];
    /**
     * ignore文件名
     */
    exports.IGNORE_FILE_NAME = '.gitignore';
    /**
     * 提取函数类型正则
     */
    exports.REG_FUNC_TYPE = /^(Method |Async function |Arrow function |Function )/g;
    /**
     * eslint提示前缀
     */
    exports.MESSAGE_PREFIX = 'Maximum allowed is 1.';
    /**
     * eslint提示后缀
     */
    exports.MESSAGE_SUFFIX = 'has a complexity of ';
});
