// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// Introducing eqArrays function into this file.

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

// Inserting our assertEqual function into this new file.
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


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
  
// Tests

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

console.log(eqObjects(shirtObject, anotherShirtObject));

eqObjects(shirtObject, anotherShirtObject); // => true

//We need to use that return value in combination with assertEquals to test if the function is working correctly.

assertEqual(eqObjects(shirtObject, anotherShirtObject),true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); 


// Step 4: Arrays As Values (Tests)
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
