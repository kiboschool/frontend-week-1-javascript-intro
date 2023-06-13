const w = require('jest-autograding-reporter').weight
const evenOrOdd  = require('./even-or-odd')

describe('evenOrOdd', () => {
    it(w(1, 'should return even for even numbers and odd for odd numbers'), () => {
        expect(evenOrOdd(4)).toBe('even');
        expect(evenOrOdd(0)).toBe('even');

        expect(evenOrOdd(3)).toBe('odd');
        expect(evenOrOdd(7)).toBe('odd');
    })
})