const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 2, 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['Lighthouse, 'Labs'] for ['Hello', 'Lightshouse, 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns 2 for the tail length of [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]).length, 2);
  });   

  it("returns 0 for the tail length of [1]", () => {
    assert.deepEqual(tail([1]).length, 0);
  });  

  it("make sure the original array was not altered by the tail function", () => {
    const words = ["hello", "world", "lighthouse"];
    const result = tail(words);
    assert.strictEqual(words.length, 3);
  });

});