// This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.


const without = function(array, values) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (!values.includes(array[i])) {
      result.push(array[i]); 
    }
  }
  return result;
};


module.exports = without;