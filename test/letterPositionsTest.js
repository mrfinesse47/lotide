const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions", () => {
  it('should detect the letter positions in array format when "hello" is passed in', () => {
    assert.deepEqual(letterPositions("hello"), {
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4],
    });
  });
});

it('should detect the letter positions in array format when "helllllooooo" is passed in', () => {
  assert.deepEqual(letterPositions("helllllooooo"), {
    h: [0],
    e: [1],
    l: [2, 3, 4, 5, 6],
    o: [7, 8, 9, 10, 11],
  });

  it('should return the letter position of "t" as [6,12], when "hello there today" is passed in', () => {
    assert.deepEqual(letterPositions("hello there today")["t"], [6, 12]);
  });
});
