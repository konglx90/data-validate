const { ANONYMOUS } = require('./utils');

const instanceOf = (o) => {
    if (o && o.name) {
        return o.name;
    }
    return ANONYMOUS;
};

module.exports = {
    instanceOf,
}