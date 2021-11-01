const middle = (arr) => {
  const resultArr = [];
  if (arr.length > 2) {
    if (Number.isInteger(arr.length / 2)) {
      resultArr.push(arr[arr.length / 2] - 1);
      resultArr.push(arr[arr.length / 2]);
    } else {
      resultArr.push(arr[parseInt(arr.length / 2)]);
    }
  }
  return resultArr;
};

module.exports = middle;
