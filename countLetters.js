//Create a function called countLetters.
//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

// Before implementing this function, we need to think about how it will report back these counts. It's not that we want to know how many H's are in this sentence?, because that would just be a number. We need it report back multiple numbers.

// take in the string 
// loop through the string and identify letters 
// increase the count and print letter + count 



const countLetters = function (str) {
  for (value of str) {
    console.log(value);

  }


}

const test = "Testando";

console.log(countLetters(test));