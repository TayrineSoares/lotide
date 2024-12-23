
// The function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = function(object, callback) {
  const keys = Object.keys(object);
  //console.log(keys);

  for (let item of keys) {
     if (callback(object[item])) {
      return item;
    }
  }
  return undefined;
};


module.exports = findKey;