const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔥🔥🔥Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = (arr1, arr2) => {
  // console.log("arr:1", arr1, "arr:2", arr2);
  // if (arr1.length !== arr2.length) {
  //   //bug fix for arrays of different length
  //   return false;
  // }

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      //if both arrays are indeed arrays
      if (arr1[i].length !== arr2[i].length) {
        return false;
      }
      eqArrays(arr1[i], arr2[i]);
    } else {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false]

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
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
