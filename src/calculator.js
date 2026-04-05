function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Division by zero is not allowed.");
  return a / b;
}

function modulo(a, b) {
  if (b === 0) throw new Error("Modulo by zero is not allowed.");
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) throw new Error("Square root of a negative number is not allowed.");
  return Math.sqrt(n);
}

const operations = { add, subtract, multiply, divide, modulo, power, squareRoot };

if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error("Usage: node calculator.js <operation> <num1> [num2]");
    console.error("Operations: add, subtract, multiply, divide, modulo, power, squareRoot");
    process.exit(1);
  }

  const [operation, ...nums] = args;

  if (!operations[operation]) {
    console.error(`Unknown operation: ${operation}`);
    console.error("Available operations: add, subtract, multiply, divide, modulo, power, squareRoot");
    process.exit(1);
  }

  const parsedNums = nums.map(Number);
  if (parsedNums.some(isNaN)) {
    console.error("All arguments must be valid numbers.");
    process.exit(1);
  }

  try {
    const result = operations[operation](...parsedNums);
    console.log(`Result: ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
