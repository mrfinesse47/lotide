const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };

  it('should return true for ab = { a: "1", b: "2" } and ba = { b: "2", a: "1" }', () => {
    assert.isTrue(eqObjects(ab, ba));
  });
  it('should return true for ab = { a: "1", b: "2" } and ba = { b: "2", a: "1" } but passed in as (ab,ba)', () => {
    assert.isTrue(eqObjects(ba, ab));
  });

  const abc = { a: "1", b: "2", c: "3" };

  it('should return false for eqObjects(abc, ab) when abc = { a: "1", b: "2", c: "3" } and ab = { a: "1", b: "2" }', () => {
    assert.isFalse(eqObjects(ab, abc));
  });
  it('should return false for eqObjects(abc, ab) when abc = { a: "1", b: "2", c: "3" } and ab = { a: "1", b: "2" }', () => {
    assert.isFalse(eqObjects(abc, ab));
  });

  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  it('should return true for eqObjects(abc, ab) when cd = { c: "1", d: ["2", 3] } and dc = { d: ["2", 3], c: "1" }', () => {
    assert.isTrue(eqObjects(cd, dc));
  });

  it("should return false when { a: { y: { m: 3, x: { z: { b: 7, q: 0 } } }, z: 1 }, b: 2 } and { a: { y: 0, z: 1 }, b: 2 } is passed in", () => {
    assert.isFalse(
      eqObjects(
        { a: { y: { m: 3, x: { z: { b: 7, q: 0 } } }, z: 1 }, b: 2 },
        { a: { y: 0, z: 1 }, b: 2 }
      )
    );
  });

  it("should return true when { a: { y: { m: 3, x: { z: { b: 7, q: 0 } } }, z: 1 }, b: 2 } and { a: { y: 0, z: 1 }, b: 2 } is passed in", () => {
    assert.isTrue(
      eqObjects(
        { a: { y: { m: 3, x: { z: { b: 7, q: 0 } } }, z: 1 }, b: 2 },
        { a: { y: { m: 3, x: { z: { b: 7, q: 0 } } }, z: 1 }, b: 2 }
      )
    );
  });
});
