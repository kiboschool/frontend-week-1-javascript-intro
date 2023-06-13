const w = require('jest-autograding-reporter').weight
const powerOfTwo = require('./power-of-two')

describe('powerOfTwo', () => {
    it(w(1, 'should return 2 to the power of the argument'), () => {
        expect(powerOfTwo(0)).toBe(1);
        expect(powerOfTwo(1)).toBe(2);
        expect(powerOfTwo(2)).toBe(4);
        expect(powerOfTwo(3)).toBe(8);
        expect(powerOfTwo(4)).toBe(16);
    })
})