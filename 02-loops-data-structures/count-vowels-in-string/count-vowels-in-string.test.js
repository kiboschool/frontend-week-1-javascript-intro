const w = require('jest-autograding-reporter').weight
const countVowelsInString = require('./count-vowels-in-string')

describe('countVowelsInString', () => {
    it(w(1, 'should return the number of vowels in the string'), () => {
        expect(countVowelsInString("Hello, World!")).toBe(3);
        expect(countVowelsInString("This is a test string.")).toBe(5);
        expect(countVowelsInString("NoVowelsHere")).toBe(5);
        expect(countVowelsInString("AEIOUaeiou")).toBe(10);
    })
})
