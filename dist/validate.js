(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./types", "./utils", "./classOf"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var types_1 = require("./types");
    exports.Types = types_1.default;
    var utils_1 = require("./utils");
    var classOf_1 = require("./classOf");
    var Path = '';
    var validateEngine = function (validate, data, path) {
        if (path === void 0) { path = ''; }
        if (utils_1.isEmpty(validate))
            return false;
        if (classOf_1.default(validate) === 'string') {
            Path = path;
            return compare(validate, data);
        }
        if (classOf_1.default(validate) === 'array') {
            if (classOf_1.default(data) !== 'array') {
                console.trace('data must be a array in generateCacheApi');
                return false;
            }
            if (validate.length > 0) {
                return data.every(function (d, index) { return validateEngine(validate[0], d, path + "." + index); });
            }
            else {
                // empty Array
                return classOf_1.default(data) === 'array';
            }
        }
        if (classOf_1.default(validate) !== 'object') {
            return classOf_1.default(data) === classOf_1.default(validate);
        }
        var validateObjKeys = Object.keys(validate);
        // empty object
        if (validateObjKeys.length === 0) {
            return classOf_1.default(data) === 'object';
        }
        return Object.keys(validate).every(function (key) {
            return validateEngine(validate[key], data[key], path + "." + key);
        });
    };
    var compare = function (validate, data) {
        var types = validate.split('|');
        // handle ?: optional
        if (validate.indexOf('?:') > -1) {
            types = validate.slice(2).split('|').concat('undefined');
        }
        types.forEach(function (type) {
            if (!utils_1.includes(types_1.basicTypes, type)) {
                throw new Error(type + " is not a right type");
            }
        });
        // handle or type like 'string|number'
        if (!utils_1.includes(types, classOf_1.default(data))) {
            return false;
        }
        return true;
    };
    var handleError = function (func) {
        return function (validate, data, falseThrowError) {
            if (falseThrowError === void 0) { falseThrowError = false; }
            var result = func(validate, data);
            if (!result && falseThrowError) {
                throw new Error(Path);
            }
            return result;
        };
    };
    exports.default = handleError(validateEngine);
});
