(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./types", "./utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var types_1 = require("./types");
    var utils_1 = require("./utils");
    var classOf = function (o) {
        if (o === null) {
            return 'null';
        }
        if (o === undefined) {
            return 'undefined';
        }
        if (utils_1.getClassName(o) === 'Function') {
            return types_1.default.instanceOf(o).toLocaleLowerCase();
        }
        if (utils_1.getClassName(o) !== utils_1.ANONYMOUS) {
            return utils_1.getClassName(o).toLocaleLowerCase();
        }
        return Object.prototype.toString.call(o).slice(8, -1).toLocaleLowerCase();
    };
    exports.default = classOf;
});
