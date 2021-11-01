// Our map function will take in two arguments:

// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const assertArraysEqual = function (arr1, arr2) {
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

//test case 1

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

//test case 2 to upper
const results2 = map(words, (word) => word.toUpperCase());
assertArraysEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

//test case 3 append to word !

const results3 = map(words, (word) => `${word}!`);

assertArraysEqual(results3, ["ground!", "control!", "to!", "major!", "tom!"]);

module.exports = map;
