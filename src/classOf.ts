import Types from './types';
import { getClassName, ANONYMOUS } from './utils';

const classOf = (o) => {
    if (o === null) { return 'null'; }
    if (o === undefined) { return 'undefined'; }

    if (getClassName(o) === 'Function') {
        return Types.instanceOf(o).toLocaleLowerCase();
    }

    if (getClassName(o) !== ANONYMOUS) {
        return getClassName(o).toLocaleLowerCase();
    }

    return Object.prototype.toString.call(o).slice(8, -1).toLocaleLowerCase();
}

export default classOf;
