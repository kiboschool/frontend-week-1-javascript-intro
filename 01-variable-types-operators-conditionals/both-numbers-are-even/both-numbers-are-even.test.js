const w = require('jest-autograding-reporter').weight
const bothNumbersAreEven  = require('./both-numbers-are-even')

describe('bothNumbersAreEven', () => {
    it(w(1, 'should check that both numbers are even'), () => {
        expect(bothNumbersAreEven(4, 6)).toBe(true);
        expect(bothNumbersAreEven(0, 2)).toBe(true);

        expect(bothNumbersAreEven(3, 6)).toBe(false);
        expect(bothNumbersAreEven(4, 7)).toBe(false);
        expect(bothNumbersAreEven(3, 7)).toBe(false);
    })
})