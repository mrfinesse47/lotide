// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`💚💚💚Assertion Passed: [${actual}] === [${expected}]`);
//   } else {
//     console.log(`🔥🔥🔥Assertion Failed: [${actual}] !== [${expected}]`);
//   }
// };

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`💚💚💚Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🔥🔥🔥Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const middle = (arr) => {
  const resultArr = [];
  if (arr.length > 2) {
    if (Number.isInteger(arr.length / 2)) {
      resultArr.push(arr[arr.length / 2] - 1);
      resultArr.push(arr[arr.length / 2]);
    } else {
      resultArr.push(arr[parseInt(arr.length / 2)]);
    }
  }
  return resultArr;
};

assertArraysEqual(middle([1]), []);
//middle([1]); // => []
assertArraysEqual(middle([1, 2]), []);
// middle([1, 2]); // => []
assertArraysEqual(middle([1, 2, 3]), [2]);
// middle([1, 2, 3]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// middle([1, 2, 3, 4, 5]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// middle([1, 2, 3, 4]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
