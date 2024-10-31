// We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

//SUDO CODING
// create the function letterPositions that takes in a string (sentence)
// iterate over the sentence using a loop 
// store the letter and its ocurrency 
// print an object with results 


const letterPositions = function (sentence) {
// creating a new array to store the values 
  const results = {};

 
  for (i = 0; i < sentence.length; i++) {  // looping over the array
     const letters = sentence[i]; // creating a variable to access each item of the array
    if (results[letters]) {           // the if statement checks if [letters] exists in the results array. 
      results[letters].push(i);       // if yes, it appends the current index i to the existing array of indices for that character.
    } else {
       results[letters] = [i] // if it doesnt exist yet, initializes a new array with the current index i as its only element. This creates a new key-value pair in results where the key is the character and the value is an array containing its index.
    }
  }
  return results;
};

const test = "hello";
console.log(letterPositions(test));