import Types, { basicTypes } from './types';
import { isEmpty, includes } from './utils';
import classOf from './classOf';

const validateEngine = (validate, data) => {
    if (isEmpty(validate)) return false;

    if (classOf(validate) === 'string') {
        let types = validate.split('|');
        // handle ?: optional
        if (validate.indexOf('?:') > -1) {
            types = validate.slice(2).split('|').concat('undefined');
        }

        types.forEach(type => {
          if (!includes(basicTypes, type)) {
            throw new Error(`${type} is not a right type`);
          }
        })

        // handle or type like 'string|number'
        if (!includes(types, classOf(data))) {
            // console.trace(`need data is ${validate} in generateCacheApi`);
            return false;
        }
        return true;
    }

    if (classOf(validate) === 'array') {
        if (classOf(data) !== 'array') {
            // console.trace('data must be a array in generateCacheApi');
            return false;
        }

        if (validate.length > 0) {
          return data.every(d => validateEngine(validate[0], d));
        } else {
          // empty Array
          return classOf(data) === 'array';
        }
    }

    if (classOf(validate) !== 'object') {
        return classOf(data) === classOf(validate);
    }

    const validateObjKeys = Object.keys(validate);
    // empty object
    if (validateObjKeys.length === 0) {
      return classOf(data) === 'object';
    }

    return Object.keys(validate).every((key) => {
        return validateEngine(validate[key], data[key]);
    });
};

export {
    validateEngine,
    Types,
};
