const eqArrays = require("./eqArrays");

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

        return eqObjects(object1[key], object2[key]);
      }
    }
  }

  return true;
};

module.exports = eqObjects;
