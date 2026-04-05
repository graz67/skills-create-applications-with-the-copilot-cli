/**
 * Unit tests for calculator.js
 *
 * Covers all arithmetic operations:
 *   - add
 *   - subtract
 *   - multiply
 *   - divide
 *   - modulo
 *   - power
 *   - sqrt
 *
 * Includes example operations from the images:
 *   2 + 3, 10 - 4, 45 * 2, 20 / 5
 *   5 % 2, 2 ^ 3, √16
 * and additional edge cases.
 */

const { add, subtract, multiply, divide, modulo, power, sqrt } = require("../calculator");

// --- Addition ---
describe("add", () => {
  // Example from image: 2 + 3 = 5
  test("2 + 3 = 5", () => expect(add(2, 3)).toBe(5));

  test("adds two positive numbers", () => expect(add(10, 20)).toBe(30));
  test("adds a positive and a negative number", () => expect(add(10, -4)).toBe(6));
  test("adds two negative numbers", () => expect(add(-5, -3)).toBe(-8));
  test("adding zero returns the same number", () => expect(add(7, 0)).toBe(7));
  test("adds floating point numbers", () => expect(add(1.5, 2.5)).toBe(4));
});

// --- Subtraction ---
describe("subtract", () => {
  // Example from image: 10 - 4 = 6
  test("10 - 4 = 6", () => expect(subtract(10, 4)).toBe(6));

  test("subtracts two positive numbers", () => expect(subtract(20, 5)).toBe(15));
  test("subtracts a larger number from a smaller one (negative result)", () =>
    expect(subtract(3, 10)).toBe(-7));
  test("subtracts a negative number (effectively adds)", () =>
    expect(subtract(5, -3)).toBe(8));
  test("subtracting zero returns the same number", () =>
    expect(subtract(9, 0)).toBe(9));
  test("subtracts floating point numbers", () =>
    expect(subtract(5.5, 2.5)).toBe(3));
});

// --- Multiplication ---
describe("multiply", () => {
  // Example from image: 45 * 2 = 90
  test("45 * 2 = 90", () => expect(multiply(45, 2)).toBe(90));

  test("multiplies two positive numbers", () => expect(multiply(6, 7)).toBe(42));
  test("multiplies a positive and a negative number", () =>
    expect(multiply(4, -3)).toBe(-12));
  test("multiplies two negative numbers (positive result)", () =>
    expect(multiply(-4, -3)).toBe(12));
  test("multiplying by zero returns zero", () =>
    expect(multiply(99, 0)).toBe(0));
  test("multiplying by one returns the same number", () =>
    expect(multiply(8, 1)).toBe(8));
  test("multiplies floating point numbers", () =>
    expect(multiply(2.5, 4)).toBe(10));
});

// --- Division ---
describe("divide", () => {
  // Example from image: 20 / 5 = 4
  test("20 / 5 = 4", () => expect(divide(20, 5)).toBe(4));

  test("divides two positive numbers", () => expect(divide(10, 2)).toBe(5));
  test("divides a positive by a negative number", () =>
    expect(divide(12, -4)).toBe(-3));
  test("divides two negative numbers (positive result)", () =>
    expect(divide(-15, -3)).toBe(5));
  test("divides to a floating point result", () =>
    expect(divide(7, 2)).toBe(3.5));
  test("dividing zero by a number returns zero", () =>
    expect(divide(0, 5)).toBe(0));

  // Edge case: division by zero
  test("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });
  test("throws an error when dividing zero by zero", () => {
    expect(() => divide(0, 0)).toThrow("Division by zero is not allowed.");
  });
  test("throws an error when dividing a negative number by zero", () => {
    expect(() => divide(-5, 0)).toThrow("Division by zero is not allowed.");
  });
});

// --- Modulo ---
describe("modulo", () => {
  // Example from image: 5 % 2 = 1
  test("5 % 2 = 1", () => expect(modulo(5, 2)).toBe(1));

  test("returns zero when a is divisible by b", () => expect(modulo(10, 5)).toBe(0));
  test("modulo with a negative dividend", () => expect(modulo(-7, 3)).toBe(-1));
  test("modulo with a negative divisor", () => expect(modulo(7, -3)).toBe(1));
  test("modulo with floating point numbers", () => expect(modulo(5.5, 2)).toBeCloseTo(1.5));

  // Edge case: modulo by zero
  test("throws an error when modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed.");
  });
  test("throws an error when modulo zero by zero", () => {
    expect(() => modulo(0, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

// --- Power ---
describe("power", () => {
  // Example from image: 2 ^ 3 = 8
  test("2 ^ 3 = 8", () => expect(power(2, 3)).toBe(8));

  test("raises a number to the power of 0 (returns 1)", () => expect(power(5, 0)).toBe(1));
  test("raises a number to the power of 1 (returns itself)", () => expect(power(7, 1)).toBe(7));
  test("raises a negative base to an even exponent (positive result)", () =>
    expect(power(-3, 2)).toBe(9));
  test("raises a negative base to an odd exponent (negative result)", () =>
    expect(power(-2, 3)).toBe(-8));
  test("raises a number to a negative exponent (fraction)", () =>
    expect(power(2, -2)).toBeCloseTo(0.25));
  test("raises a number to a fractional exponent (square root)", () =>
    expect(power(9, 0.5)).toBeCloseTo(3));
  test("0 to the power of any positive number is 0", () => expect(power(0, 5)).toBe(0));
});

// --- Square Root ---
describe("sqrt", () => {
  // Example from image: √16 = 4
  test("√16 = 4", () => expect(sqrt(16)).toBe(4));

  test("square root of 0 is 0", () => expect(sqrt(0)).toBe(0));
  test("square root of 1 is 1", () => expect(sqrt(1)).toBe(1));
  test("square root of 9 is 3", () => expect(sqrt(9)).toBe(3));
  test("square root of a non-perfect square", () => expect(sqrt(2)).toBeCloseTo(1.4142, 4));
  test("square root of a large number", () => expect(sqrt(10000)).toBe(100));

  // Edge case: square root of a negative number
  test("throws an error for square root of a negative number", () => {
    expect(() => sqrt(-1)).toThrow("Square root of a negative number is not allowed.");
  });
  test("throws an error for square root of -100", () => {
    expect(() => sqrt(-100)).toThrow("Square root of a negative number is not allowed.");
  });
});
