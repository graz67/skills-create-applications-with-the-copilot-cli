/**
 * Node.js CLI Calculator
 *
 * Supports four basic arithmetic operations:
 *   - addition       (add)
 *   - subtraction    (subtract)
 *   - multiplication (multiply)
 *   - division       (divide)
 *
 * Usage:
 *   node src/calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node src/calculator.js add 5 3        => 8
 *   node src/calculator.js subtract 9 4   => 5
 *   node src/calculator.js multiply 6 7   => 42
 *   node src/calculator.js divide 10 2    => 5
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

// Map of supported operations
const operations = { add, subtract, multiply, divide };

// --- CLI entry point (only runs when executed directly, not when imported) ---
if (require.main === module) {
  const [, , operation, arg1, arg2] = process.argv;

  if (!operation || arg1 === undefined || arg2 === undefined) {
    console.error(
      "Usage: node src/calculator.js <add|subtract|multiply|divide> <num1> <num2>"
    );
    process.exit(1);
  }

  if (!operations[operation]) {
    console.error(
      `Unknown operation: "${operation}". Supported: add, subtract, multiply, divide`
    );
    process.exit(1);
  }

  const a = parseFloat(arg1);
  const b = parseFloat(arg2);

  if (isNaN(a) || isNaN(b)) {
    console.error("Both arguments must be valid numbers.");
    process.exit(1);
  }

  try {
    const result = operations[operation](a, b);
    console.log(`Result: ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide };
