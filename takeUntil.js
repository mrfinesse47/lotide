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

const takeUntil = (arr, callback) => {
  const resultArr = [];

  for (const el of arr) {
    if (callback(el)) {
      return resultArr;
    } else {
      resultArr.push(el);
    }
  }
  return resultArr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];

assertArraysEqual(
  takeUntil(data2, (x) => x === ","),
  ["I've", "been", "to", "Hollywood"]
);

assertArraysEqual(
  takeUntil(data1, (x) => x < 0),
  [1, 2, 5, 7, 2]
);

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

module.exports = takeUntil;
