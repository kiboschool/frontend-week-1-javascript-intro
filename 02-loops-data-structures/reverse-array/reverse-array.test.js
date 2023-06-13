const w = require('jest-autograding-reporter').weight
const reverseArray = require('./reverse-array')

describe('reverseArray', () => {
    it(w(1, 'should return a reversed array'), () => {
        expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
        expect(reverseArray(["a", "b", "c"])).toEqual(["c", "b", "a"]);
        expect(reverseArray([true, false, true])).toEqual([true, false, true]);
        expect(reverseArray([])).toEqual([]);
    })
})