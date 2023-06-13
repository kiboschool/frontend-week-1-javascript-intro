const w = require('jest-autograding-reporter').weight
const addNumbers  = require('./add-numbers')

describe('addNumbers', () => {
    it(w(1, 'should add numbers'), () => {
        expect(addNumbers(1,2)).toEqual(3)
        expect(addNumbers(-2,2)).toEqual(0)

    })
})