const assertObjectsEqual = require('../assertObjectsEqual');


//TESTS

const obj1 = { a: "1", b: "2" };
const obj2 = { a: "1", b: "2", c: [3, 4] };

assertObjectsEqual(obj1, obj2);

const object1 = { a: "1", b: 2 };
const object2 = { b: 2, a: "1" };

assertObjectsEqual(object1, object2);