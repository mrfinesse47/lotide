const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔥🔥🔥Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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

const eqObjects = function (object1, object2) {
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

        return eqObjects(object1[key], object2[key]);
      }
    }
  }

  return true;
};

// const eqObjects = function (object1, object2) {
//   if (object1 === object2) {
//     return true;
//   }

//   let key1 = Object.keys(object1);
//   let key2 = Object.keys(object2);

//   if (key1.length != key2.length) return false;

//   for (const key of key1)
//     if (!key2.includes(key) || !eqObjects(object1[key], object2[key]))
//       return false;

//   return true;
// };

//use with assert equal

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ba, ab), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
assertEqual(eqObjects(abc, ab), false); // => false

//handling non primitive

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

//eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => true
//using recursion
assertEqual(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
  false
); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
// => false
assertEqual(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 2 }),
  true
);
assertEqual(
  eqObjects(
    { a: { y: { m: 3, x: { z: { b: 7, q: 0 } } }, z: 1 }, b: 2 },
    { a: { y: 0, z: 1 }, b: 2 }
  ),
  false
);
assertEqual(
  eqObjects(
    { a: { y: { m: 3, x: { z: { b: 7, q: 0 } } }, z: 1 }, b: 2 },
    { a: { y: { m: 3, x: { z: { b: 7, q: 0 } } }, z: 1 }, b: 2 }
  ),
  true
);

module.exports = eqObjects;
