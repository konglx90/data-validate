import { ANONYMOUS } from './utils';

const instanceOf = (o) => {
    if (o && o.name) {
        return o.name;
    }
    return ANONYMOUS;
};

export const basicTypes = [
  'string',
  'number',
  'array',
  'null',
  'undefined'
];

export default {
    instanceOf,
    basicTypes,
}
