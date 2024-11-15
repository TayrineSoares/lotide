// The  function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = function(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
  
    if (Array.isArray(currentElement)) {
      for (let j = 0; j < currentElement.length; j++) {
        result.push(currentElement[j]);
      }
    } else {
      result.push(currentElement);
    }
  }
  return result; 
}

module.exports = flatten; 
