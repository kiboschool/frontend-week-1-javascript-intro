const w = require('jest-autograding-reporter').weight
const canIOrderItem  = require('./can-i-order-item')

describe('canIOrderItem', () => {
    it(w(1, 'should check if the item is in stock'), () => {
        const stockArray = [{ "Pizza": 5 }, { "Burger": 3 }, { "Pasta": 0 }];

        expect(canIOrderItem("Pizza", stockArray)).toBe(true);
        expect(canIOrderItem("Burger", stockArray)).toBe(true);

        expect(canIOrderItem("Pasta", stockArray)).toBe(false);
        expect(canIOrderItem("Salad", stockArray)).toBe(false);
        expect(canIOrderItem("Nuggets", stockArray)).toBe(false);
    })
})