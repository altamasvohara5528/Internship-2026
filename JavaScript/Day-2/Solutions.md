# Day 2 — Closures and Array Methods: Solutions

## Section A — MCQs
1. B  2. C  3. B  4. D  5. A
6. B  7. B  8. B  9. A  10. B

## Section B — Predict the Output
Q1: `6`, then `7`  
Q2: `[3, 6, 9]`  
Q3: `[30, 40]`  
Q4: `8`  
Q5:
```text
A
B
C
```

## Section C — Debugging
### Q1. Closure counter
```javascript
function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```
The original returned the number immediately, not a function. The corrected function closes over `count`.

### Q2. Array transformation
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6]
```
`forEach()` returns undefined; `map()` creates a new transformed array.

### Q3. Find student
```javascript
const students = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Ravi" }
];
const student = students.find(item => item.id === 2);
console.log(student); // { id: 2, name: "Ravi" }
```
Use strict equality (`===`) rather than assignment (`=`).

## Section D — Coding Exercises
### Q1. Counter increasing by 2
```javascript
function createStepCounter() {
  let count = 0;
  return () => {
    count += 2;
    return count;
  };
}
const counter = createStepCounter();
console.log(counter()); // 2
console.log(counter()); // 4
console.log(counter()); // 6
```

### Q2. Calculator with callback
```javascript
function calculator(a, b, operation) {
  if (typeof operation !== "function") {
    throw new TypeError("operation must be a function");
  }
  return operation(a, b);
}
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
console.log(calculator(10, 5, add));      // 15
console.log(calculator(10, 5, multiply)); // 50
```

### Q3. Add 18% GST with map
```javascript
const prices = [100, 250, 500];
const pricesWithGST = prices.map(price =>
  Number((price * 1.18).toFixed(2))
);
console.log(pricesWithGST); // [118, 295, 590]
```

### Q4. Filter active users
```javascript
const users = [
  { name: "Asha", active: true },
  { name: "Ravi", active: false },
  { name: "Neha", active: true }
];
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);
```

## Section E — Mini Project: Student Result Processor
```javascript
const students = [
  { id: 1, name: "Asha", marks: 82 },
  { id: 2, name: "Ravi", marks: 67 },
  { id: 3, name: "Neha", marks: 91 },
  { id: 4, name: "Imran", marks: 45 },
  { id: 5, name: "Meera", marks: 74 }
];

students.forEach(student =>
  console.log(student.name, student.marks)
);

const passedStudents = students.filter(student => student.marks >= 50);
const passedNames = passedStudents.map(student => student.name);
const selectedStudent = students.find(student => student.id === 3);

function createProcessCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const countProcessing = createProcessCounter();
console.log("Passed:", passedNames);
console.log("Student with ID 3:", selectedStudent);
console.log("Processing run:", countProcessing());
console.log("Processing run:", countProcessing());
```

## Section F — Viva: Short Answers
1. A closure is a function together with access to variables from its outer lexical scope, even after the outer function has returned.
2. `map()` transforms every element and returns a new array; `filter()` returns elements that pass a condition.
3. `find()` returns the first matching element (or undefined); `filter()` returns an array of all matching elements.
4. A callback lets another function run supplied behavior at the appropriate time or for each item.
5. `map()`, `filter()`, and `calculator()` above are higher-order functions because they accept a function argument.
