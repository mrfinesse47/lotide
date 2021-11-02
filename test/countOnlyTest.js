const countOnly = require("../countOnly");
const assert = require("chai").assert;

describe("#countOnly", () => {
  it('should return {Jason:1} when {Jason:true,Kevin:true} and ["Jason","Fred"] is passed in "', () => {
    assert.deepEqual(
      countOnly(["Jason", "Fred"], { Jason: true, Kevin: true }),
      {
        Jason: 1,
      }
    );
  });
});
