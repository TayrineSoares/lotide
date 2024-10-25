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