const assertEqual = require("../assertEqual");
const assert = require("chai").assert;

describe("#assertEqual", () => {
  it('should be false when "Lighthouse Labs", "Bootcamp" is passed in', () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
  it("should be true when 1 and 1 is passed in", () => {
    assert.isFalse(assertEqual(1, 1));
  });
});
