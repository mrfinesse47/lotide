const findKeyByValue = (obj, value) => {
  for (const key in obj) {
    if (obj[key] === value) {
      return key; //if it doesn't find the key it will naturally return undefined.
    }
  }
};

module.exports = findKeyByValue;
