const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  it('returns 2 elements for tail(["Hello", "Lighthouse", "Labs"].length', () => {
    assert.strictEqual(result.length, 2);
  });
  it('ensures the first element is "Lighthouse" for tail(["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(result[0], "Lighthouse");
  });
  it('ensures the second element is "Labs" for tail(["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(result[1], "Labs");
  });
  it('ensures it returns the last 2 elements (tail) from (["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
});
