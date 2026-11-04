# Day 1 — JavaScript Fundamentals: Solutions

## Section 1 — MCQs
1. B — `let` is block-scoped and can be reassigned.
2. C — `var` is hoisted and initialized with `undefined`.
3. C — Accessing `let` before initialization causes a ReferenceError.
4. A — `var a` is function-scoped; `let b` is block-scoped.
5. B — `return` sends a value back to the caller.
6. B — The arrow function returns 8.
7. A — Function declarations are hoisted with their function body.
8. B — The call stack tracks active function calls.
9. B — A const object can have its properties changed.
10. C — A function without an explicit return returns `undefined`.

## Section 2 — Predict the Output
1.
```text
Surat
Anand
```
2.
```text
undefined
500
```
3.
```text
30
undefined
```
4.
```text
A
C
B
```
5.
```text
90
60
```

## Section 3 — Debugging
### Q1
`name` is local to the function. Return it and store the returned value:
```javascript
function showName() {
  const name = "Rahul";
  return name;
}
const name = showName();
console.log(name);
```

### Q2
A const variable cannot be accessed before initialization:
```javascript
const course = "MERN Stack";
console.log(course);
```

### Q3
Return the calculation instead of only printing it:
```javascript
function calculateTotal(price, quantity) {
  return price * quantity;
}
const total = calculateTotal(200, 3);
console.log(total); // 600
```

## Section 4 — Coding Exercises
### Q1. Student introduction
```javascript
function introduceStudent(name, age, course) {
  return `Hello, I am ${name}, I am ${age} years old, and I am learning ${course}.`;
}
console.log(introduceStudent("Asha", 21, "MERN Stack"));
```

### Q2. Even or odd
```javascript
function checkEvenOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(4)); // Even
console.log(checkEvenOdd(7)); // Odd
console.log(checkEvenOdd(0)); // Even
```

### Q3. Discount calculator
```javascript
function calculateDiscount(price, percentage) {
  if (typeof price !== "number" || typeof percentage !== "number" ||
      price < 0 || percentage < 0 || percentage > 100) {
    return null;
  }
  return price - (price * percentage / 100);
}
console.log(calculateDiscount(1000, 20)); // 800
console.log(calculateDiscount(-5, 20));  // null
```

### Q4. Grade calculator
```javascript
function getGrade(marks) {
  if (typeof marks !== "number" || !Number.isFinite(marks) ||
      marks < 0 || marks > 100) return "Invalid marks";
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 50) return "C";
  return "Fail";
}
[49, 50, 75, 90, 100].forEach(mark =>
  console.log(mark, getGrade(mark))
);
```

### Q5. Student search
```javascript
function findStudent(students, name) {
  return students.find(student =>
    student.name.toLowerCase() === name.toLowerCase()
  );
}
const students = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 }
];
console.log(findStudent(students, "Neha"));
```

## Section 5 — Mini Project: Student Result Processor
```javascript
const students = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 },
  { name: "Imran", marks: 48 },
  { name: "Meera", marks: 74 }
];

function getTotalMarks(list) {
  return list.reduce((total, student) => total + student.marks, 0);
}
function getAverageMarks(list) {
  return list.length === 0 ? null : getTotalMarks(list) / list.length;
}
function getStudentResult(student) {
  return student.marks >= 50 ? "Pass" : "Fail";
}
function findStudentByName(list, name) {
  return list.find(student =>
    student.name.toLowerCase() === name.toLowerCase()
  );
}
function getTopStudent(list) {
  if (list.length === 0) return undefined;
  return list.reduce((top, student) =>
    student.marks > top.marks ? student : top
  );
}
function printStudentReport(list) {
  list.forEach(student => {
    console.log(`${student.name}: ${student.marks} — ${getStudentResult(student)}`);
  });
}

console.log("Total:", getTotalMarks(students));       // 362
console.log("Average:", getAverageMarks(students));  // 72.4
console.log("Top:", getTopStudent(students).name);   // Neha
console.log("Imran:", getStudentResult(findStudentByName(students, "Imran"))); // Fail
printStudentReport(students);
```

## Section 6 — Viva: Short Answers
1. `var` is function-scoped; `let` and `const` are block-scoped. `let` can be reassigned; `const` cannot be reassigned.
2. Scope defines where a variable can be accessed.
3. Hoisting is JavaScript's processing of declarations before executing code.
4. The Temporal Dead Zone is the period before a let/const declaration is initialized.
5. An execution context is the environment in which JavaScript code runs.
6. The call stack records active function calls.
7. A parameter is a function's named input; an argument is the actual value passed.
8. `return` gives a value to the caller; `console.log()` displays a value.
9. Functions organize reusable code and reduce repetition.
10. Read the error and stack trace, check spelling/scope, and verify declaration and initialization order.
