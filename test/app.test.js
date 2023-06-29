const assert = require("assert");
const calculator = require("../app/calculator.js");

describe("Calculator", function () {
  it("returns zero", function () {
    let result = calculator.calculate("0");
    assert.equal(result, 0);
  });

  it("calculates addition", function () {
    let result = calculator.calculate("+ 3 4");
    assert.equal(result, 7);
  });

  it("calculates subtraction and multiplication", function () {
    let result = calculator.calculate("- 3 * 4 5");
    assert.equal(result, -17);
  });

  it("calculates addition and multiplication", function () {
    let result = calculator.calculate("* + 3 4 5");
    assert.equal(result, 35);
  });
});
