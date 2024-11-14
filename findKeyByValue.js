// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

// SUDO CODING

// Define what is the key that we are looking for
// create a function that reads the object 
// use an If statement to identify the key inside the object 
// return the first key found 



const findKeyByValue = function (object, prize) {
  const keys = Object.keys(object); 

  for (let item of keys) {
  if (object[item] === prize) {
    return item;
  }
}
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

// testing Object.keys function 
console.log(Object.keys(bestTVShowsByGenre));

// testing the function 
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));

// adding assertEqual function to this file 

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// testing with assertEqual function 

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);