const assertEqual = require('../assertEqual'); 
const findKey = require('../findKey');

const testCase1 = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
}
console.log(findKey((testCase1),
  (x) => x.stars === 2
)); // => "noma"


// USING ASSERT EQUAL TO CHECK 
assertEqual((findKey(testCase1,(x) => x.stars === 2)), "noma"); 