const countLetters = require("../countLetters");
const assert = require("chai").assert;

describe("#countLetters", () => {
  it("should return a:'5' when 'apple banana pear' is passed in", () => {
    assert(countLetters("apple banana pear")["a"], 5);
  });
  it("should return p:'3' when 'apple banana pear' is passed in", () => {
    assert(countLetters("apple banana pear")["p"], 3);
  });
  it("should return l:'1' when 'apple banana pear' is passed in", () => {
    assert(countLetters("apple banana pear")["l"], 1);
  });
});
