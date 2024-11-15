
//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

// take in the string 
// loop through the string and identify letters 
// increase the count and print letter + count 



const countLetters = function (str) {
  const results = {};
  for (const item of str) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
    }
    return results;
  }

module.exports = countLetters; 
