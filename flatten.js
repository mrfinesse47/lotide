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

const flatten = (arr) => {
  const resultArray = [];
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      //all good if we are only 2d
      el.forEach((e) => resultArray.push(e));
    } else {
      resultArray.push(el);
    }
  });
  return resultArray;
};
const res = flatten([1, 2, [3, 4], 5, [6]]);

assertArraysEqual(res, [1, 2, 3, 4, 5, 6]);

module.exports = flatten;
