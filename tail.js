const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

//tests

const words = (["Yo Yo", "Lighthouse", "Labs"]);
tail(words);
assertEqual(words.length, 3);
console.log(tail(words));


const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);

const result1 = tail([1, 2, 3]);
console.log(result1);

assertEqual(tail(words).length, words.length - 1); //test that the tail function returns an array with the correct length, and that using an array with one or zero elements as an argument returns an empty array.

assertEqual(tail(words)[0], "Lighthouse");//test that the first element of the returned array is the second element of the original array.

assertEqual(tail(["test"]).length, 0);
assertEqual(tail([]).length, 0); //both lines are testing the tail function with an array of one or zero elements.