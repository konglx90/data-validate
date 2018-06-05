import { ANONYMOUS } from './utils';

const instanceOf = (o) => {
    if (o && o.name) {
        return o.name;
    }
    return ANONYMOUS;
};

export default {
    instanceOf,
}
