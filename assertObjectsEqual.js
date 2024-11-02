const eqObjects = function (object1, object2) {

  const keys1 = Object.keys(object1) 
  const keys2 = Object.keys(object2)
  // console.log(keys1);
  // console.log(keys2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (let key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    
    if (Array.isArray(value1) && Array.isArray(value2)) {
      // Use eqArrays to compare the array values
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else {
      // Compare primitive values as usual
      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
};

