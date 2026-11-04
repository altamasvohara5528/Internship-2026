# Day 5 — JavaScript Practice Workbook

**Topics:** Modern JavaScript features, JSON, data transformation, sorting, `reduce()`, and browser storage.

**Total Marks:** 100  
**Suggested Duration:** 60–75 minutes

## Section A — MCQs (20 Marks)

*Each question carries 2 marks.*

1. Which operator provides a fallback only for `null` or `undefined`?
   - A. `||`
   - B. `??`
   - C. `&&`
   - D. `!`

2. Which operator safely accesses a potentially missing nested property?
   - A. `?.`
   - B. `??`
   - C. `...`
   - D. `=>`

3. Which method converts a JavaScript object into a JSON string?
   - A. `JSON.parse()`
   - B. `JSON.stringify()`
   - C. `Object.keys()`
   - D. `JSON.convert()`

4. Which method combines array elements into a single result?
   - A. `filter()`
   - B. `find()`
   - C. `reduce()`
   - D. `forEach()`

5. Which array method changes the original array when sorting?
   - A. `map()`
   - B. `filter()`
   - C. `sort()`
   - D. `reduce()`

6. What type of values does `localStorage` store?
   - A. Objects directly
   - B. Strings
   - C. Functions
   - D. Promises

7. Which method removes one key from `localStorage`?
   - A. `deleteItem()`
   - B. `removeItem()`
   - C. `removeKey()`
   - D. `erase()`

8. What does `localStorage.getItem("missing")` return when the key does not exist?
   - A. `undefined`
   - B. `false`
   - C. `null`
   - D. An empty object

9. Which operator can preserve a valid value of `0` instead of replacing it with a fallback?
   - A. `??`
   - B. `||`
   - C. `!`
   - D. `&&`

10. Why should passwords not be stored in `localStorage`?
    - A. It cannot store strings.
    - B. It automatically encrypts every value.
    - C. JavaScript running on the same origin can access stored data.
    - D. Data is always deleted immediately.

## Section B — Predict the Output (15 Marks)

*Each question carries 3 marks.*

### Q1

```javascript
console.log(0 || 10);
console.log(0 ?? 10);
```

### Q2

```javascript
const numbers = [1, 2, 3, 4];

const total = numbers.reduce((sum, n) => sum + n, 0);

console.log(total);
```

### Q3

```javascript
const product = {
  name: "Mouse",
  price: 500
};

console.log(JSON.stringify(product));
```

### Q4

```javascript
const users = [
  { name: "Asha", active: true },
  { name: "Ravi", active: false },
  { name: "Neha", active: true }
];

console.log(users.filter(user => user.active).length);
```

### Q5

```javascript
const prices = [300, 100, 200];

const sorted = [...prices].sort((a, b) => a - b);

console.log(sorted);
console.log(prices);
```

## Section C — Debugging (15 Marks)

*Each question carries 5 marks.*

### Q1 — JSON Parsing

Fix the code so that the JSON string is converted into an object.

```javascript
const json = '{"name":"Asha","age":21}';

const user = JSON.stringify(json);

console.log(user.name);
```

### Q2 — Numeric Sorting

Correct the code so the prices are sorted in ascending numerical order without changing the original array.

```javascript
const prices = [100, 20, 300, 5];

const sorted = prices.sort();

console.log(sorted);
```

### Q3 — Browser Storage

Fix the code so an array of tasks is saved and restored correctly.

```javascript
const tasks = ["Learn JS", "Practice React"];

localStorage.setItem("tasks", tasks);

const savedTasks = localStorage.getItem("tasks");

console.log(savedTasks);
```

## Section D — Coding Exercises (20 Marks)

*Each question carries 5 marks.*

1. Write a function that uses optional chaining and nullish coalescing to return a user's city or `"Unknown city"`.
2. Convert an array of product objects into a JSON string and parse it back into a JavaScript array.
3. Use `reduce()` to calculate the total cost of products containing `name`, `price`, and `quantity`.
4. Save an array of tasks in `localStorage` and retrieve it as an array after saving.

## Section E — Mini Project: Persistent Task Manager (20 Marks)

Build a browser-based task manager using HTML, CSS, and JavaScript.

### Requirements

1. Add tasks using a text input and button.
2. Display all saved tasks.
3. Allow users to mark tasks as completed.
4. Allow users to delete tasks.
5. Store tasks in `localStorage` so they remain after a page reload.
6. Use `JSON.stringify()` and `JSON.parse()` for persistence.
7. Handle missing or malformed saved data.
8. Use functions to separate adding, displaying, saving, and loading tasks.
9. Use meaningful variable names and keep the code organized.

**Submission:** HTML, CSS, and JavaScript files with a brief explanation of how task persistence works.

## Section F — Viva Questions (10 Marks)

*Each question carries 2 marks.*

1. What is the difference between `||` and `??`?
2. Why do we use `JSON.stringify()`?
3. What does `reduce()` do?
4. What is the difference between `localStorage` and `sessionStorage`?
5. What security risks are associated with browser storage?

---

# Instructor Answer Key

## Section A — MCQs

1. B
2. A
3. B
4. C
5. C
6. B
7. B
8. C
9. A
10. C

## Section B — Expected Output

### Q1

```text
10
0
```

### Q2

```text
10
```

### Q3

```text
{"name":"Mouse","price":500}
```

### Q4

```text
2
```

### Q5

```text
[100, 200, 300]
[300, 100, 200]
```

## Section C — Suggested Corrections

### Q1

```javascript
const json = '{"name":"Asha","age":21}';

const user = JSON.parse(json);

console.log(user.name); // Asha
```

`JSON.parse()` converts JSON text into a JavaScript value.

### Q2

```javascript
const prices = [100, 20, 300, 5];

const sorted = [...prices].sort((a, b) => a - b);

console.log(sorted); // [5, 20, 100, 300]
console.log(prices); // [100, 20, 300, 5]
```

### Q3

```javascript
const tasks = ["Learn JS", "Practice React"];

localStorage.setItem("tasks", JSON.stringify(tasks));

const savedTasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");

console.log(savedTasks);
```

For robust applications, also catch JSON parsing errors and storage failures.

## Section D — Evaluation Guide

Award marks for correct syntax, correct data transformation, numerical calculations, and successful storage and retrieval.

## Section E — Evaluation Guide

- Add and display tasks: 5 marks
- Complete and delete tasks: 4 marks
- Save and restore tasks: 5 marks
- Handle missing or invalid data: 3 marks
- Code organization and readability: 3 marks

## Section F — Expected Concepts

Students should explain nullish coalescing, JSON conversion, aggregation with `reduce()`, browser storage differences, and why client-side storage should not contain sensitive secrets.
