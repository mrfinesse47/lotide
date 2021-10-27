const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔥🔥🔥Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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

console.log(countLetters("apple banana pear"));
assertEqual(countLetters("apple banana pear")["a"], 5);
assertEqual(countLetters("apple banana pear")["p"], 3);
assertEqual(countLetters("apple banana pear")["l"], 1);
assertEqual(countLetters("apple banana pear")["e"], 2);
