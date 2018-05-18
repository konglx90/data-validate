const ANONYMOUS = '<<anonymous>>';

const getClassName = (propValue) => {
  if (!propValue.constructor || !propValue.constructor.name) {
    return ANONYMOUS;
  }
  return propValue.constructor.name;
}

const isEmpty = o => o === null || o === undefined;

const includes = (array, item) => {
    if (array.includes) {
        return array.includes(item);
    }

    return array.indexOf(item) > -1;
}

module.exports = {
    getClassName,
    isEmpty,
    includes,
    ANONYMOUS,
}
