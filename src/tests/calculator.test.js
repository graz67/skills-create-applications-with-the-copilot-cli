const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("../calculator");

describe("add", () => {
  test("adds two positive numbers", () => expect(add(2, 3)).toBe(5));
  test("adds a positive and a negative number", () => expect(add(-1, 5)).toBe(4));
  test("adds two negative numbers", () => expect(add(-3, -4)).toBe(-7));
  test("adds zero to a number", () => expect(add(7, 0)).toBe(7));
  test("adds two decimals", () => expect(add(0.1, 0.2)).toBeCloseTo(0.3));
  test("adds large numbers", () => expect(add(1000000, 2000000)).toBe(3000000));
});

describe("subtract", () => {
  test("subtracts two positive numbers", () => expect(subtract(10, 4)).toBe(6));
  test("subtracts a larger from a smaller number", () => expect(subtract(3, 7)).toBe(-4));
  test("subtracts two negative numbers", () => expect(subtract(-5, -3)).toBe(-2));
  test("subtracts zero", () => expect(subtract(8, 0)).toBe(8));
  test("subtracts decimals", () => expect(subtract(1.5, 0.5)).toBeCloseTo(1.0));
  test("result is zero", () => expect(subtract(5, 5)).toBe(0));
});

describe("multiply", () => {
  test("multiplies two positive numbers", () => expect(multiply(45, 2)).toBe(90));
  test("multiplies by zero", () => expect(multiply(5, 0)).toBe(0));
  test("multiplies two negative numbers", () => expect(multiply(-3, -4)).toBe(12));
  test("multiplies a positive and a negative", () => expect(multiply(3, -4)).toBe(-12));
  test("multiplies by one", () => expect(multiply(7, 1)).toBe(7));
  test("multiplies decimals", () => expect(multiply(2.5, 4)).toBe(10));
  test("multiplies large numbers", () => expect(multiply(1000, 1000)).toBe(1000000));
});

describe("divide", () => {
  test("divides two positive numbers", () => expect(divide(20, 5)).toBe(4));
  test("divides resulting in a decimal", () => expect(divide(7, 2)).toBe(3.5));
  test("divides a negative by a positive", () => expect(divide(-10, 2)).toBe(-5));
  test("divides two negatives", () => expect(divide(-10, -2)).toBe(5));
  test("divides by one", () => expect(divide(9, 1)).toBe(9));
  test("divides zero by a number", () => expect(divide(0, 5)).toBe(0));
  test("throws on division by zero", () => expect(() => divide(5, 0)).toThrow("Division by zero is not allowed."));
  test("throws on division by zero (negative numerator)", () => expect(() => divide(-5, 0)).toThrow("Division by zero is not allowed."));
  test("throws on division by zero (zero numerator)", () => expect(() => divide(0, 0)).toThrow("Division by zero is not allowed."));
});

describe("modulo", () => {
  test("returns remainder of positive numbers", () => expect(modulo(10, 3)).toBe(1));
  test("returns zero when evenly divisible", () => expect(modulo(9, 3)).toBe(0));
  test("returns remainder with negative dividend", () => expect(modulo(-10, 3)).toBe(-1));
  test("returns remainder with negative divisor", () => expect(modulo(10, -3)).toBe(1));
  test("returns number when divisor is larger", () => expect(modulo(3, 10)).toBe(3));
  test("throws on modulo by zero", () => expect(() => modulo(5, 0)).toThrow("Modulo by zero is not allowed."));
});

describe("power", () => {
  test("raises a positive base to a positive exponent", () => expect(power(2, 10)).toBe(1024));
  test("raises a number to the power of zero", () => expect(power(5, 0)).toBe(1));
  test("raises a number to the power of one", () => expect(power(7, 1)).toBe(7));
  test("raises a negative base to an even exponent", () => expect(power(-2, 4)).toBe(16));
  test("raises a negative base to an odd exponent", () => expect(power(-2, 3)).toBe(-8));
  test("raises a base to a negative exponent", () => expect(power(2, -2)).toBe(0.25));
  test("raises zero to any positive power", () => expect(power(0, 5)).toBe(0));
  test("fractional exponent (square root via power)", () => expect(power(9, 0.5)).toBeCloseTo(3));
});

describe("squareRoot", () => {
  test("returns square root of a perfect square", () => expect(squareRoot(9)).toBe(3));
  test("returns square root of 4", () => expect(squareRoot(4)).toBe(2));
  test("returns square root of 2", () => expect(squareRoot(2)).toBeCloseTo(1.4142));
  test("returns square root of 0", () => expect(squareRoot(0)).toBe(0));
  test("returns square root of 1", () => expect(squareRoot(1)).toBe(1));
  test("returns square root of 25", () => expect(squareRoot(25)).toBe(5));
  test("throws on square root of a negative number", () => expect(() => squareRoot(-1)).toThrow("Square root of a negative number is not allowed."));
  test("throws on square root of a negative decimal", () => expect(() => squareRoot(-0.5)).toThrow("Square root of a negative number is not allowed."));
});
