// We will be implementing a function quite similar to this one, but isn't present in their library: takeUntil.

// It will take in two parameters as well:

// The array to work with
// The callback (which Lodash calls "predicate")

const takeUntil = function(array, callback) {
  result = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
      result.push(item);
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);