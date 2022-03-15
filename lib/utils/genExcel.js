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
    var XLSX = require('xlsx');
    var dayjs = require('dayjs');
    var genExcel = function (table) {
        var ws = XLSX.utils.aoa_to_sheet(table);
        /* build up workbook */
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');
        /* generate download */
        XLSX.writeFile(wb, "review-".concat(dayjs().format('YYYY-MM-DD'), ".xlsx"));
        console.log('excel generate success');
    };
    exports.default = genExcel;
});
