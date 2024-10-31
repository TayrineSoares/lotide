// We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

//SUDO CODING
// create the function letterPositions that takes in a string (sentence)
// iterate over the sentence using a loop 
// store the letter and its position 
// print an object with results 



const letterPositions = function (sentence) {

  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letters = sentence[i];
    if (letters !== ' ') {
      if (results[letters]) {
        results[letters].push(i);
      } else {
        results[letters] = [i]
      }
    }
  }
  return results;
};

const test = "hello";
console.log(letterPositions(test));

// adding the assert Arrays Equal function

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
    console.log("✅✅✅ Assertion Passed: The arrays are equal.");
  } else {
    console.log("🛑🛑🛑 Assertion did not pass: The arrays are not equal.");
  }
};
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
