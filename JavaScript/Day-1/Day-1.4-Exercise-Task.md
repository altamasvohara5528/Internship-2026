# Practice Day 1 — JavaScript Fundamentals

**Topics:** Variables, scope, hoisting, execution context, call stack, and functions


## Instructions

- Attempt the questions without looking at your learning notes.
- Predict code output before running it.
- Explain your answers wherever requested.
- Test your code with different inputs.
- Complete the assessment independently.

---

## Section 1: MCQs — 20 Marks

*Each question carries 2 marks.*

### Q1. Which keyword declares a block-scoped variable that can be reassigned?

A. `const`

B. `let`

C. `return`

D. `function`

### Q2. What is the output?

```js
console.log(value);
var value = 10;
```

A. `10`

B. `null`

C. `undefined`

D. `ReferenceError`

### Q3. What happens when an uninitialized `let` variable is accessed?

A. It returns `undefined`.

B. It returns `null`.

C. It throws a `ReferenceError`.

D. It returns `0`.

### Q4. Which variable is accessible outside this block?

```js
if (true) {
  var a = 10;
  let b = 20;
}
```

A. `a` only

B. `b` only

C. Both

D. Neither

### Q5. What does `return` do?

A. Always prints a value.

B. Returns a value to the caller.

C. Declares a variable.

D. Repeats a function.

### Q6. What is the output?

```js
const add = (a, b) => a + b;
console.log(add(5, 3));
```

A. `53`

B. `8`

C. `undefined`

D. Error

### Q7. Which function can generally be called before its declaration?

A. Function declaration

B. Uninitialized `const` function expression

C. Every arrow function

D. None

### Q8. What does the call stack track?

A. Database records

B. Active function calls

C. HTML elements

D. CSS styles

### Q9. What happens here?

```js
const student = { marks: 70 };
student.marks = 90;

console.log(student.marks);
```

A. `70`

B. `90`

C. `undefined`

D. Error

### Q10. What does a function return when it has no explicit return statement?

A. `0`

B. `null`

C. `undefined`

D. `false`

---

## Section 2: Predict the Output — 20 Marks

*Each question carries 4 marks. Write the output and explain why.*

### Q1. Scope

```js
let city = "Anand";

function showCity() {
  let city = "Surat";
  console.log(city);
}

showCity();
console.log(city);
```

### Q2. Hoisting

```js
console.log(price);
var price = 500;
console.log(price);
```

### Q3. Function Return

```js
function calculate(a, b) {
  console.log(a + b);
}

const result = calculate(10, 20);
console.log(result);
```

### Q4. Call Stack

```js
function first() {
  console.log("A");
  second();
  console.log("B");
}

function second() {
  console.log("C");
}

first();
```

### Q5. Shadowing

```js
let marks = 60;

if (true) {
  let marks = 90;
  console.log(marks);
}

console.log(marks);
```

---

## Section 3: Debugging — 15 Marks

*Each question carries 5 marks. Identify the problem, correct it, and explain the cause.*

### Q1. Scope Error

```js
function showName() {
  const name = "Rahul";
}

showName();
console.log(name);
```

### Q2. Initialization Error

```js
console.log(course);
const course = "MERN Stack";
```

### Q3. Incorrect Return Value

```js
function calculateTotal(price, quantity) {
  console.log(price * quantity);
}

const total = calculateTotal(200, 3);
console.log(total);
```

Modify the function so that `total` stores the calculated value.

---

## Section 4: Coding Exercises — 25 Marks

### Q1. Student Introduction — 5 Marks

Write `introduceStudent(name, age, course)` that returns a formatted sentence.

Example:

```js
introduceStudent("Asha", 21, "MERN Stack");
```

Expected result:

```text
Hello, I am Asha, I am 21 years old, and I am learning MERN Stack.
```

### Q2. Even or Odd — 5 Marks

Write `checkEvenOdd(number)` that returns `"Even"` or `"Odd"`.

Test `4`, `7`, and `0`.

### Q3. Discount Calculator — 5 Marks

Write `calculateDiscount(price, percentage)` that returns the final price after applying a discount.

Requirements:

- Reject negative prices.
- Reject percentages below 0 or above 100.
- Return `null` for invalid input.

### Q4. Grade Calculator — 5 Marks

Write `getGrade(marks)` using these rules:

| Marks | Grade |
|---|---|
| 90–100 | A |
| 75–89 | B |
| 50–74 | C |
| 0–49 | Fail |
| Invalid input | Invalid marks |

Test boundary values such as `49`, `50`, `75`, `90`, and `100`.

### Q5. Student Search — 5 Marks

Given:

```js
const students = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 }
];
```

Write `findStudent(students, name)` that returns the matching student or `undefined` when no match exists.

---

## Section 5: Mini Project — 20 Marks

### Student Result Processor

Create a program that processes these student records.

```js
const students = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 },
  { name: "Imran", marks: 48 },
  { name: "Meera", marks: 74 }
];
```

### Requirements

Implement the following functions:

1. `getTotalMarks(students)` — returns total marks.
2. `getAverageMarks(students)` — returns the average or `null` for an empty array.
3. `getStudentResult(student)` — returns `"Pass"` or `"Fail"`.
4. `findStudentByName(students, name)` — returns the matching student or `undefined`.
5. `getTopStudent(students)` — returns the student with the highest marks, or `undefined` for an empty array.
6. `printStudentReport(students)` — prints each student's name, marks, and result.

### Expected Results

- Total marks: `362`
- Average marks: `72.4`
- Top student: Neha
- Imran's result: Fail

### Evaluation

| Criteria | Marks |
|---|---:|
| Correct functions and calculations | 8 |
| Scope and variable usage | 3 |
| Edge-case handling | 3 |
| Readability | 2 |
| Testing and explanation | 4 |
| **Total** | **20** |

---

## Section 6: Viva Questions

The instructor may ask these questions verbally.

1. Explain the difference between `var`, `let`, and `const`.
2. What is scope?
3. What is hoisting?
4. What is the Temporal Dead Zone?
5. What is an execution context?
6. What is the call stack?
7. What is the difference between a parameter and an argument?
8. What is the difference between `return` and `console.log()`?
9. Why do we use functions?
10. How would you debug a `ReferenceError`?

---

## Submission Checklist

- [ ] Complete all MCQs.
- [ ] Solve all output questions.
- [ ] Fix the debugging exercises.
- [ ] Complete the coding exercises.
- [ ] Finish the Student Result Processor.
- [ ] Test edge cases.
- [ ] Explain your code to the instructor.
- [ ] Submit your code in a GitHub repository named `week-1-day-1-javascript`.

---

# Instructor Answer Key

*Keep this section private when distributing the student workbook.*

## MCQ Answers

| Question | Answer |
|---|---|
| 1 | B |
| 2 | C |
| 3 | C |
| 4 | A |
| 5 | B |
| 6 | B |
| 7 | A |
| 8 | B |
| 9 | B |
| 10 | C |

## Output Answers

**Q1**

```text
Surat
Anand
```

**Q2**

```text
undefined
500
```

**Q3**

```text
30
undefined
```

**Q4**

```text
A
C
B
```

**Q5**

```text
90
60
```

## Debugging Guidance

- **Q1:** `name` is local to `showName()`. Return it from the function or print it inside the function.
- **Q2:** `course` is accessed before initialization. Move the declaration above the `console.log()`.
- **Q3:** Return `price * quantity` instead of only printing it.

## Assessment Guidance

Accept different correct implementations. Evaluate whether students understand the logic, return values correctly, use appropriate scope, handle the specified edge cases, and can explain their solutions.
