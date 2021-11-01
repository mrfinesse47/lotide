const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false]

assertEqual(
  eqArrays(
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5],
    ]
  ),
  false
); // => should PASS

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

assertEqual(
  eqArrays(
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5],
    ]
  ),
  false
); // => false
assertEqual(eqArrays([[2, 3], [4], 2], [[2, 3], [4], 2]), true); // => true
assertEqual(
  eqArrays(
    [
      [2, 3],
      [[4, 5], 6],
    ],
    [
      [2, 3],
      [[4, 5], 6],
    ]
  ),
  true
); // => false

assertEqual(
  eqArrays(
    [[2, 3], [4][(2, [2, 3], [4], 3)], [4], 2],
    [[2, 3], [4][(2, [2, 3], [4], 3)], [4], 2]
  ),
  true
); // => true
assertEqual(
  eqArrays(
    [
      [2, 3],
      [[4, 5], 6],
    ],
    [
      [2, 3],
      [[4, 5], 6],
    ]
  ),
  true
); // => false
