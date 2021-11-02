const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
  };
  it("Should be a drama for the wire", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("Should be a comedy for Brooklyn Nine-Nine", () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"),
      "comedy"
    );
  });
  it("Should return undefined for That 70s Show", () => {
    console.log((bestTVShowsByGenre, "That 70s Show"));
    assert((bestTVShowsByGenre, "That 70s Show"), undefined);
  });
});
