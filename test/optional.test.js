const expect = require('chai').expect;
const validate = require('../dist/validate').validateEngine;

describe('check optional validate', () => {
    it('optional check', () => {
        expect(validate('?:string', 'ok')).to.be.equal(true);
    });

    it('optional check', () => {
        expect(validate('?:string', undefined)).to.be.equal(true);
    });

    it('optional check', () => {
        expect(validate('?:string', null)).to.be.equal(false);
    });

    it('optional check', () => {
        expect(validate({
          a: '?:string'
        }, {})).to.be.equal(true);
    });

    it('optional check:type:error', () => {
        expect(() => validate('strng', 'ok')).to.throw(Error, 'strng is not a right type');
    });
});
