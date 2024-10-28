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
    console.log("Assertion Passed: The arrays are equal.");
  } else {
    console.log("Assertion did not pass: The arrays are not equal.");
  }
};


assertArraysEqual([1, 2, 3], [1, 2,3]);