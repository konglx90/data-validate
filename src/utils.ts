const ANONYMOUS = '<<anonymous>>';

const getClassName = (propValue) => {
  if (!propValue.constructor || !propValue.constructor.name) {
    return ANONYMOUS;
  }
  return propValue.constructor.name;
}

const isEmpty = o => o === null || o === undefined;

const includes = <T>(array: Array<T>, item: T) => {
    return array.indexOf(item) > -1;
}

export {
    getClassName,
    isEmpty,
    includes,
    ANONYMOUS,
}
