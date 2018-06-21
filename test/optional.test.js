const expect = require('chai').expect;
const validate = require('../dist/validate').validateEngine;

describe('check optional validate', () => {
    it('base optional: has', () => {
        expect(validate('?:string', 'ok')).to.be.equal(true);
    });

    it('base optional: has no', () => {
        expect(validate('?:string', undefined)).to.be.equal(true);
    });

    it('base optional: null', () => {
        expect(validate('?:string', null)).to.be.equal(false);
    });

    it('more validate about optional', () => {
        expect(validate({
          a: '?:string'
        }, {})).to.be.equal(true);
    });

    it('optional check:type:error', () => {
        expect(() => validate('strng', 'ok')).to.throw(Error, 'strng is not a right type');
    });
});
