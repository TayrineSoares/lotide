const eqArrays = function(first, second) {
  if (first.length !== second.length) {
    return false; 
  }
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
      return false;
      }
    }
  return true;
}


const eqObjects = function (object1, object2) {

  const keys1 = Object.keys(object1) 
  const keys2 = Object.keys(object2)
  // console.log(keys1);
  // console.log(keys2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (let key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    
    if (Array.isArray(value1) && Array.isArray(value2)) {
      // Use eqArrays to compare the array values
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else {
      // Compare primitive values as usual
      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
};

//Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  //console.log(`Example label: ${inspect(actual)}`);
  
  const isEqual = eqObjects(actual, expected)
  if (isEqual) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}.`);
  } else {
    console.log(`🛑 Assertion did not pass: ${inspect(actual)} !== ${inspect(expected)}.`);
  }
  };


//TESTS

const obj1 = { a: "1", b: "2" };
const obj2 = { a: "1", b: "2", c: [3, 4] };

assertObjectsEqual(obj1, obj2);

const object1 = { a: "1", b: 2 };
const object2 = { b: 2, a: "1" };

assertObjectsEqual(object1, object2);