# Day 1.3 — Functions and Student Result Processor

## 1. Learning Objectives

By the end of this session, students should be able to:

- Write reusable functions.
- Understand parameters, arguments, and return values.
- Use function declarations, expressions, and arrow functions.
- Handle basic input validation.
- Build a Student Result Processor.

## 2. Topics Covered

1. Introduction to functions
2. Parameters and arguments
3. The `return` statement
4. Function declarations
5. Function expressions
6. Arrow functions
7. Basic input validation
8. Student Result Processor project

---

## Topic 1: Introduction to Functions

A function is a reusable block of code that performs a particular task.

```js
function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log(calculateTotal(100, 2)); // 200
console.log(calculateTotal(250, 3)); // 750
```

Instead of repeating the same calculation, we call the function with different inputs.

## Topic 2: Parameters and Arguments

Parameters are names defined in a function. Arguments are the values supplied when the function is called.

```js
function greet(name) {
  console.log("Hello, " + name);
}

greet("Asha");
greet("Rahul");
```

**Output:**

```text
Hello, Asha
Hello, Rahul
```

Here, `name` is the parameter, while `"Asha"` and `"Rahul"` are arguments.

## Topic 3: The `return` Statement

`return` sends a value back to the code that called the function.

```js
function add(a, b) {
  return a + b;
}

const result = add(5, 7);

console.log(result); // 12
```

### Return vs `console.log()`

```js
function add(a, b) {
  console.log(a + b);
}

const result = add(5, 7);

console.log(result);
```

**Output:**

```text
12
undefined
```

The function prints `12` but does not return it. A function without an explicit return value produces `undefined`.

## Topic 4: Function Declarations

```js
function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
```

A function declaration defines a named function. It can include conditions and return calculated results.

## Topic 5: Function Expressions

```js
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // 20
```

A function expression creates a function and assigns it to a variable. The variable must be initialized before it is used to call the function.

## Topic 6: Arrow Functions

Arrow functions provide a shorter syntax.

```js
const square = number => number * number;

console.log(square(6)); // 36
```

For multiple parameters:

```js
const add = (a, b) => a + b;

console.log(add(10, 15)); // 25
```

Arrow functions do not have their own `this` binding, so they are not interchangeable with regular functions in every situation.

## Topic 7: Basic Input Validation

Functions should check inputs when invalid values could cause incorrect results.

```js
function calculateDiscount(price, percentage) {
  if (
    typeof price !== "number" ||
    typeof percentage !== "number" ||
    !Number.isFinite(price) ||
    !Number.isFinite(percentage) ||
    price < 0 ||
    percentage < 0 ||
    percentage > 100
  ) {
    return null;
  }

  return price - (price * percentage) / 100;
}

console.log(calculateDiscount(1000, 10));  // 900
console.log(calculateDiscount(1000, 120)); // null
```

In this example, `null` indicates invalid input. Real applications may use a different error-handling strategy.

---

## Topic 8: Practical Project — Student Result Processor

### Project Objective

Build a program that processes student records using variables, arrays, objects, functions, and conditions.

### Starter Data

```js
const students = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 },
  { name: "Imran", marks: 48 },
  { name: "Meera", marks: 74 }
];
```

### Required Functions

**1. Calculate total marks**

```js
function getTotalMarks(studentList) {
  // Return the sum of all marks.
}
```

Expected result: `362`

**2. Calculate average marks**

```js
function getAverageMarks(studentList) {
  // Return the average, or null for an empty array.
}
```

Expected result: `72.4`

**3. Determine pass or fail**

```js
function getStudentResult(student) {
  // Return "Pass" for marks >= 50; otherwise "Fail".
}
```

**4. Find a student**

```js
function findStudentByName(studentList, name) {
  // Return the student or undefined.
}
```

**5. Print a report**

```js
function printStudentReport(studentList) {
  // Print each student's name, marks, and result.
}
```

### Project Requirements

- Use separate functions for each operation.
- Return calculated values where appropriate.
- Keep temporary variables inside the functions that need them.
- Do not unnecessarily modify the original student data.
- Handle an empty array.
- Test both passing and failing students.

---

## 3. Practice Tasks — Day 1.3

### Task 1: Function Basics

Write these functions:

- `getFullName(firstName, lastName)`
- `isEven(number)`
- `getLargest(a, b, c)`
- `calculateDiscount(price, percentage)`

### Task 2: Function Comparison

Implement `calculateTotal(price, quantity)` using:

1. A function declaration.
2. A function expression.
3. An arrow function.

Explain the differences.

### Task 3: Student Result Processor

Complete all five required functions in the project. Test their output and explain how each function works.

### Task 4: Stretch Challenges

1. Find the highest-scoring student.
2. Return a new array containing only passing students.
3. Count how many students passed.
4. Handle missing or invalid marks.
5. Explain how your code behaves when the array is empty.

## 4. Review Questions

1. What is a function?
2. What is the difference between parameters and arguments?
3. What is the difference between `return` and `console.log()`?
4. What happens when a function has no explicit return statement?
5. What is the difference between a function declaration and expression?
6. What is an arrow function?
7. Why is input validation important?
8. Why should functions return values for calculations?
9. Why should the original data not be modified unnecessarily?

## Completion Criteria

Students should be able to complete the Student Result Processor independently, test edge cases, and explain their functions to the instructor.
