const expect = require('chai').expect;
const validate = require('../dist/validate').default;

describe('false throw error', () => {
    it('easy', () => {
        expect(() => validate({
            ok: 'number'
        }, {
            ok: '9999'
        }, true)).to.throw(Error, '.ok');

        expect(() => validate({
            ids: ['string']
        }, {}, true)).to.throw(Error, '.ids');
    });
});
