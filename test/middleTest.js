const assert = require("chai").assert;

// const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

describe("#tail", () => {
  it("should return [] on middle([1])", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("should return [] on middle([1,2])", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return [2] on middle([1, 2, 3]))", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return [3] on middle([1, 2, 3, 4, 5])", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("should return  [2, 3] on middle([1, 2, 3, 4])", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return  [3, 4] on middle([1, 2, 3, 4, 5, 6])", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
