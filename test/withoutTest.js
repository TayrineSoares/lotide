const without = require('../without'); 
const assertArraysEqual = require('../assertArraysEqual'); 

console.log(without([1, 2, 3, 4, 5], [2, 4]));
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
const words = ["hello", "world", "lighthouse"];
const result1 = without(words, ["lighthouse"]);
assertArraysEqual(result1, ["hello", "world"]);
