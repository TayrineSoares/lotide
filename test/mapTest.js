const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
console.log(results1);

// test cases 
const moreWords = ["cat", "dog", "duck"]
const results2 = map(moreWords, (word) => word[0]);
console.log(results2);
assertArraysEqual((results2), ["c", "d", "d"]);

const withNumbers = ["cat", "dog", 3]
const results3 = map(withNumbers, (word) => word[0]);
console.log(results3);
assertArraysEqual((results3), ["c", "d"]);
