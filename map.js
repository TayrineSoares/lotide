//Our map function will take in two arguments:

// * An array to map
// * A callback function

// The map function will return a new array based on the results of the callback function.


const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = []
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
  };


const results1 = map(words, (word) => word[0]);
console.log(results1);

// Introducing the AssertEqual to verify the arrays 

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
};
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Assertion Passed: The arrays are equal.");
  } else {
    console.log("🛑 Assertion did not pass: The arrays are not equal.");
  }
};

// test cases 
const moreWords = ["cat", "dog", "duck"]
const results2 = map(moreWords, (word) => word[0]);
console.log(results2);
assertArraysEqual((results2), ["c", "d", "d"]);

const withNumbers = ["cat", "dog", 3]
const results3 = map(withNumbers, (word) => word[0]);
console.log(results3);
assertArraysEqual((results3), ["c", "d"]);


