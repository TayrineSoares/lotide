const assertArraysEqual = require('../assertArraysEqual'); 
const flatten = require('../flatten');

const nested1 = [1, 2, [3, 4], 5, [6]]; 
console.log(flatten(nested1));
assertArraysEqual((flatten(nested1)), [1, 2, 3, 4, 5, 6]);
