const eqObjects = require('./eqObjects'); 


//Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  
  const isEqual = eqObjects(actual, expected)
  if (isEqual) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}.`);
  } else {
    console.log(`🛑 Assertion did not pass: ${inspect(actual)} !== ${inspect(expected)}.`);
  }
  };


module.exports = assertObjectsEqual; // exporting the function 