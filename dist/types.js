(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require("./utils");
    var instanceOf = function (o) {
        if (o && o.name) {
            return o.name;
        }
        return utils_1.ANONYMOUS;
    };
    exports.basicTypes = [
        'string',
        'number',
        'array',
        'null',
        'undefined'
    ];
    exports.default = {
        instanceOf: instanceOf,
        basicTypes: exports.basicTypes,
    };
});
