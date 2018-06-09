const ANONYMOUS = '<<anonymous>>';

const getClassName = (propValue: any) => {
  if (!propValue.constructor || !propValue.constructor.name) {
    return ANONYMOUS;
  }
  return propValue.constructor.name;
}

const isEmpty = (o: any) => o === null || o === undefined;

const includes = <T>(array: Array<T>, item: T) => {
    return array.indexOf(item) > -1;
}

export {
    getClassName,
    isEmpty,
    includes,
    ANONYMOUS,
}
