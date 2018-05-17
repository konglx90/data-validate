const expect = require('chai').expect;
const { validateEngine: validate, Types } = require('../src/validate');

function Dog() {}

describe('check instanceof validate', () => {
    const dog = new Dog();
    it('easy check', () => {
        expect(validate(Dog, dog)).to.be.equal(true);
    });

    it('easy check', () => {
        expect(validate({
            d: Dog
        }, dog)).to.be.equal(false);
    });

    it('easy check', () => {
        expect(validate({
            d: Dog
        }, {
            d: dog
        })).to.be.equal(true);
    });

    it('easy check', () => {
        expect(validate([Dog], [dog, dog])).to.be.equal(true);
    });
});