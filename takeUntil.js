// The takeUntil function will take in two parameters:

// The array to work with
// The callback (which Lodash calls "predicate")

const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
      result.push(item);
  }
  return result;
};

module.exports = takeUntil; 