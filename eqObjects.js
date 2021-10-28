const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔥🔥🔥Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  for (const key in object2) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

//use with assert equal

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ba, ab), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
assertEqual(eqObjects(abc, ab), false); // => false
