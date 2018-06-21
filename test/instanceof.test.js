const expect = require('chai').expect;
const validate = require('../dist/validate').default;
const { Types } = validate;

function Dog() {}
const dog = new Dog();

describe('check instanceof validate', () => {
    it('base instanceof test', () => {
        expect(validate(Dog, dog)).to.be.equal(true);
    });

    it('object validate', () => {
        expect(validate({
            d: Dog
        }, {
            d: dog
        })).to.be.equal(true);
    });

    it('fail the test in object validate', () => {
        expect(validate({
            d: Dog
        }, dog)).to.be.equal(false);
    });

    it('array validate', () => {
        expect(validate([Dog], [dog, dog])).to.be.equal(true);
    });
});
