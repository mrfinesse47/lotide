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

module.exports = flatten;
