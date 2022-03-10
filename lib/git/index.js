(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "simple-git"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var simple_git_1 = require("simple-git");
    var options = {
        baseDir: process.cwd(),
        binary: 'git',
        maxConcurrentProcesses: 6,
    };
    // when setting all options in a single object
    var git = (0, simple_git_1.default)(options);
    exports.default = git;
});
