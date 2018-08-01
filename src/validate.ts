import Types, { basicTypes } from './types';
import { isEmpty, includes } from './utils';
import classOf from './classOf';

let Path = '';

const validateEngine = (validate, data, path = '') => {
    if (isEmpty(validate)) return false;

    if (classOf(validate) === 'string') {
      Path = path;
      return compare(validate, data);
    }

    if (classOf(validate) === 'array') {
        if (classOf(data) !== 'array') {
            console.trace('data must be a array in generateCacheApi');
            return false;
        }

        if (validate.length > 0) {
          return data.every((d, index) => validateEngine(validate[0], d, `${path}.${index}`));
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
        return validateEngine(validate[key], data[key], `${path}.${key}`);
    });
};

const compare = (validate: string, data) => {
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
    return false;
  }
  return true;
}

const handleError = (func) => {
  return function(validate, data, falseThrowError = false) {
    const result = func(validate, data);
    if (!result && falseThrowError) {
      throw new Error(Path);
    }

    return result;
  }
}

export default handleError(validateEngine);

export { Types };
