const min = require('../min');
const assertEqual = require('../assertEqual')


const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight is \$${min(flightPrices)}`);
assertEqual(min(flightPrices), 490);

const values1 = [-1, 3, 0, -4, 1, 4, -2];
assertEqual(min(values1), -4);

const value2 = [232];
assertEqual(min(value2), 232);
