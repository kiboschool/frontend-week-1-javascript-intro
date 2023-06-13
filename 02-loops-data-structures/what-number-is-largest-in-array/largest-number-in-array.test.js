const w = require('jest-autograding-reporter').weight
const largestNumberInArray = require('./largest-number-in-array')

describe('largestNumberInArray', () => {
    it(w(1, 'should return the largest number in the array'), () => {
        expect(largestNumberInArray([1, 2, 3])).toBe(3);
        expect(largestNumberInArray([-5, 0, 5])).toBe(5);
        expect(largestNumberInArray([10, 10, 10])).toBe(10);
        expect(largestNumberInArray([4])).toBe(4);
    })
})