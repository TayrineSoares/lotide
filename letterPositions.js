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
    if (results[letters]) {
      results[letters].push(i);
    } else {
      results[letters] = [i]
    }
  }
  return results;
};

const test = "hello";
console.log(letterPositions(test));