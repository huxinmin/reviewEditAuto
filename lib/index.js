#!/usr/bin/env node
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./review"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var review_1 = require("./review");
    var yargs = require('yargs');
    var pkg = require('../package.json');
    function main() {
        yargs.command('review', 'excute code review', {}, review_1.default);
        yargs.command('version', 'print version', {}, function () {
            console.log(pkg.version);
        });
        yargs.argv;
    }
    main();
});
