/**
 * Node.js CLI Calculator
 *
 * Supports arithmetic operations:
 *   - addition       (add)
 *   - subtraction    (subtract)
 *   - multiplication (multiply)
 *   - division       (divide)
 *   - modulo         (modulo)
 *   - exponentiation (power)
 *   - square root    (sqrt)
 *
 * Usage:
 *   node src/calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node src/calculator.js add 5 3        => 8
 *   node src/calculator.js subtract 9 4   => 5
 *   node src/calculator.js multiply 6 7   => 42
 *   node src/calculator.js divide 10 2    => 5
 *   node src/calculator.js modulo 5 2     => 1
 *   node src/calculator.js power 2 3      => 8
 *   node src/calculator.js sqrt 16        => 4
 */

// Adds two numbers and returns the result
function add(a, b) {
  return a + b;
}

// Subtracts b from a and returns the result
function subtract(a, b) {
  return a - b;
}

// Multiplies two numbers and returns the result
function multiply(a, b) {
  return a * b;
}

// Divides a by b and returns the result
// Throws an error if b is zero to prevent division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Returns the remainder of a divided by b
// Throws an error if b is zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

// Raises base to the power of exp
function power(base, exp) {
  return Math.pow(base, exp);
}

// Returns the square root of n
// Throws an error if n is negative
function sqrt(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
}

// Map of supported operations
const operations = { add, subtract, multiply, divide, modulo, power, sqrt };

// --- CLI entry point (only runs when executed directly, not when imported) ---
if (require.main === module) {
  const [, , operation, arg1, arg2] = process.argv;

  if (!operation || arg1 === undefined) {
    console.error(
      "Usage: node src/calculator.js <add|subtract|multiply|divide|modulo|power|sqrt> <num1> [num2]"
    );
    process.exit(1);
  }

  if (!operations[operation]) {
    console.error(
      `Unknown operation: "${operation}". Supported: add, subtract, multiply, divide, modulo, power, sqrt`
    );
    process.exit(1);
  }

  const a = parseFloat(arg1);
  const b = arg2 !== undefined ? parseFloat(arg2) : undefined;

  if (isNaN(a) || (arg2 !== undefined && isNaN(b))) {
    console.error("Arguments must be valid numbers.");
    process.exit(1);
  }

  try {
    const result = operation === "sqrt" ? operations[operation](a) : operations[operation](a, b);
    console.log(`Result: ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, modulo, power, sqrt };
