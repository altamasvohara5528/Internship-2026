# Day 2 — JavaScript Practice Workbook

**Topics:** Closures, lexical scope, callbacks, higher-order functions, `forEach()`, `map()`, `filter()`, and `find()`.

**Total Marks:** 100  
**Suggested Duration:** 60–75 minutes

## Section A — MCQs (20 Marks)

*Each question carries 2 marks.*

1. What is a closure?
   - A. A loop
   - B. A function retaining access to its lexical scope
   - C. An array method
   - D. A class

2. Which method creates a new array by transforming each element?
   - A. `forEach()`
   - B. `find()`
   - C. `map()`
   - D. `push()`

3. What does `filter()` return?
   - A. The first matching element
   - B. A new array of matching elements
   - C. Always a Boolean
   - D. `undefined`

4. What does `find()` return if no match exists?
   - A. `null`
   - B. `false`
   - C. An empty array
   - D. `undefined`

5. Which method is designed for performing an action on each item without creating a transformed array?
   - A. `forEach()`
   - B. `map()`
   - C. `filter()`
   - D. `find()`

6. A callback is:
   - A. A variable declared globally
   - B. A function passed to another function
   - C. A special loop
   - D. A type of object

7. What does this return?
   ```javascript
   [1, 2, 3].map(n => n + 1)
   ```
   - A. `[1, 2, 3]`
   - B. `[2, 3, 4]`
   - C. `[1, 3, 5]`
   - D. `undefined`

8. What is the result of `[2, 4, 6].filter(n => n > 4)`?
   - A. `[2, 4]`
   - B. `[6]`
   - C. `6`
   - D. `true`

9. What is a higher-order function?
   - A. A function that accepts or returns another function
   - B. A function that only uses numbers
   - C. A function without parameters
   - D. A function that always returns an array

10. Why do two calls to a counter factory produce independent counters?
    - A. They share a single variable
    - B. Each call creates a separate lexical environment
    - C. `console.log()` copies the variable
    - D. Closures cannot retain state

## Section B — Predict the Output (15 Marks)

*Each question carries 3 marks.*

### Q1
```javascript
function outer() {
  let value = 5;
  return () => ++value;
}

const counter = outer();

console.log(counter());
console.log(counter());
```

### Q2
```javascript
const numbers = [1, 2, 3];

const result = numbers.map(n => n * 3);

console.log(result);
```

### Q3
```javascript
const numbers = [10, 20, 30, 40];

console.log(numbers.filter(n => n >= 30));
```

### Q4
```javascript
const numbers = [4, 8, 12];

console.log(numbers.find(n => n > 5));
```

### Q5
```javascript
function run(callback) {
  console.log("A");
  callback();
  console.log("C");
}

run(() => console.log("B"));
```

## Section C — Debugging (15 Marks)

*Each question carries 5 marks.*

### Q1 — Closure

Correct the code so the counter increases by one on each call.

```javascript
function createCounter() {
  let count = 0;

  return count++;
}

const counter = createCounter();
console.log(counter());
```

### Q2 — Array Transformation

The following code is intended to create an array of doubled numbers. Fix it.

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.forEach(n => n * 2);

console.log(doubled);
```

### Q3 — Finding a Student

Correct the condition so that the program finds the student whose ID is `2`.

```javascript
const students = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Ravi" }
];

const student = students.find(student => student.id = 2);

console.log(student);
```

## Section D — Coding Exercises (20 Marks)

*Each question carries 5 marks.*

1. Create a closure-based counter that starts at 0 and increments by 2 on every call.
2. Write a calculator function that accepts two numbers and a callback operation.
3. Use `map()` to convert an array of prices into prices with 18% GST added.
4. Use `filter()` to select users who are active from an array of user objects.

## Section E — Mini Project: Student Result Processor (20 Marks)

Create a program to process student results.

### Requirements

1. Create at least five student objects with `id`, `name`, and `marks`.
2. Use `forEach()` to print every student's name and marks.
3. Use `filter()` to select students with marks of 50 or above.
4. Use `map()` to create an array of student names who passed.
5. Use `find()` to locate a student using their ID.
6. Create a closure-based function that tracks how many times a result-processing operation is performed.

**Submission:** One JavaScript file with readable code and comments explaining each array method and the closure.

## Section F — Viva Questions (10 Marks)

*Each question carries 2 marks.*

1. Explain a closure with a real example.
2. What is the difference between `map()` and `filter()`?
3. What is the difference between `find()` and `filter()`?
4. Why is a callback useful?
5. Give an example of a higher-order function.

---

# Instructor Answer Key

## Section A — MCQs

1. B
2. C
3. B
4. D
5. A
6. B
7. B
8. B
9. A
10. B

## Section B — Expected Output

**Q1**
```text
6
7
```

**Q2**
```text
[3, 6, 9]
```

**Q3**
```text
[30, 40]
```

**Q4**
```text
8
```

**Q5**
```text
A
B
C
```

## Section C — Suggested Corrections

**Q1**
```javascript
function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

**Q2**
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6]
```

**Q3**
```javascript
const student = students.find(student => student.id === 2);
```

Use `===` for comparison. The original code uses assignment (`=`).

## Section D — Evaluation Guide

Award marks for correct syntax, expected behavior, suitable callback usage, and clear code.

## Section E — Evaluation Guide

- Correct student data: 3 marks
- Appropriate use of `forEach()`: 3 marks
- Correct `filter()` and `map()` operations: 6 marks
- Correct use of `find()`: 3 marks
- Working closure counter: 3 marks
- Readability and comments: 2 marks

## Section F — Expected Concepts

Students should explain retained lexical scope, callback functions, higher-order functions, the different return values of array methods, and how to select an appropriate method for a task.
