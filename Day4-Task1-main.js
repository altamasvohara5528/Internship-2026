import { add, subtract, multiply, divide, isEven as checkEven } from "./Day4-Task1-math.js";

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));
console.log("Is 8 even?", checkEven(8));
console.log("Is 7 even?", checkEven(7));

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error("Calculator error:", error.message);
}
