const countLetters = (letters) => {
  letters = letters.replace(/\s/g, ""); //removes spaces, can remove different chars if we want
  const resultObj = {};

  for (const ltr of letters) {
    if (resultObj[ltr]) {
      resultObj[ltr] += 1;
    } else {
      resultObj[ltr] = 1;
    }
  }
  return resultObj;
};

module.exports = countLetters;
