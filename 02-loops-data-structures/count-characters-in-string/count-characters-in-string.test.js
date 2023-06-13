const w = require('jest-autograding-reporter').weight
const countCharactersInString = require('./count-characters-in-string')

describe('countCharactersInString', () => {
    it(w(1, 'should return the number of characters in the string'), () => {
        expect(countCharactersInString("Pizza")).toEqual(5);
        expect(countCharactersInString("Burger")).toEqual(6);
        expect(countCharactersInString("")).toEqual(0);
        expect(countCharactersInString("Pizza Burger time 😁")).toEqual(20);
    })
})
