const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);

  if (obj1Keys.length !== Object.keys(object2).length) {
    return false;
  }

  for (const key of obj1Keys) {
    if (object1[key] !== object2[key]) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        //if they are both arrays
        if (!eqArrays(object1[key], object2[key])) {
          return false; //if they dont match using eqArrays function return false
        }
      } else {
        //is not an array
        return false;
      }
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(
      `💚💚💚Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`
    );
  } else {
    console.log(
      `🔥🔥🔥Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`
    );
  }
};

assertObjectsEqual(
  { address: 12345, month: "nov", someArr: [1, 2, 3] },
  { address: 12345, month: "nov", someArr: [1, 2, 3] }
);

assertObjectsEqual(
  { address: 12345, month: "nov", someArr: [1, 2] },
  { address: 12345, month: "nov", someArr: [1, 2, 3] }
);

assertObjectsEqual(
  { address: 12345, month: "nov" },
  { address: 12345, month: "nov", someArr: [1, 2, 3] }
);

assertObjectsEqual({}, {});

module.exports = assertObjectsEqual;
