const min = function(numbers) {
  if (numbers.length === 0) return undefined;
  let minValue = numbers[0];

  for (let items of numbers) {
    if(items < minValue) {
      minValue = items;
    }
  }
  return minValue;
};

// another solution using sort 
  // const min = function(numbers) {
  // numbers.sort((a,b) => a - b); 
  // return numbers[0];
//}

module.exports = min; 