// The middle function will take in an array and return the middle-most element(s) of the given array.

// The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

const middle = function(array) {
  const length = array.length;

  const indexMiddle = Math.floor(length / 2);

  if (length <= 2) {
    return [];
  } 
  
  if (length % 2 === 1) {
    return [array[indexMiddle]];
  } else {
    return [array[indexMiddle - 1], array[indexMiddle]];
  }
};

module.exports = middle;