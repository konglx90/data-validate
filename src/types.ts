import { ANONYMOUS } from './utils';

const instanceOf = (o: any) => {
    if (o && o.name) {
        return o.name;
    }
    return ANONYMOUS;
};

export const basicTypes = [
  'string',
  'number',
  'boolean',
  'null',
  'undefined',
  'object',
  'array',
];

export default {
    instanceOf,
    basicTypes,
}
