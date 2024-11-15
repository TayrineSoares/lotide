const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual'); 

const test = "aabcca";
const result = countLetters(test);
console.log(countLetters(test));

assertEqual(result['a'], 3);
assertEqual(result['b'], 1);
assertEqual(result['c'], 2);