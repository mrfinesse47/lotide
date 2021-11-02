const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("should return true for eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("should return false for eqArrays([1, 2, 3], [3, 2, 1])", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it("should return false for eqArrays([[2, 3], [4]],[[2, 3],[4, 5]])", () => {
    assert.isFalse(
      eqArrays(
        [[2, 3], [4]],
        [
          [2, 3],
          [4, 5],
        ]
      )
    );
  });
  it("should return true for eqArrays([[2, 3], [4]], [[2, 3], [4]])", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });
  it("should return true for eqArrays([[2, 3],[[4, 5], 6],],[[2, 3],[[4, 5], 6],])", () => {
    assert.isTrue(
      eqArrays(
        [
          [2, 3],
          [[4, 5], 6],
        ],
        [
          [2, 3],
          [[4, 5], 6],
        ]
      )
    );
  });
});

// assertEqual(
eqArrays(
  [
    [2, 3],
    [[4, 5], 6],
  ],
  [
    [2, 3],
    [[4, 5], 6],
  ]
);
//   true
// ); // => false
