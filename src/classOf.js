const Types = require('./types');
const { getClassName, ANONYMOUS } = require('./utils');

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

module.exports = classOf;