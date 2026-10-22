// Import named exports from the math module.
import { add, subtract, multiply, divide } from "./Day4-Task1-math.js";

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));

try {
  console.log("Division:", divide(10, 5));
  console.log("Division by zero:", divide(10, 0));
} catch (error) {
  console.error("Math error:", error.message);
}
