// Named exports: reusable calculator functions.
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero.");
  return a / b;
}

export function isEven(number) {
  return Number.isInteger(number) && number % 2 === 0;
}
