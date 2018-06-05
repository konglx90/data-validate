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
    var ANONYMOUS = '<<anonymous>>';
    exports.ANONYMOUS = ANONYMOUS;
    var getClassName = function (propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    };
    exports.getClassName = getClassName;
    var isEmpty = function (o) { return o === null || o === undefined; };
    exports.isEmpty = isEmpty;
    var includes = function (array, item) {
        return array.indexOf(item) > -1;
    };
    exports.includes = includes;
});
