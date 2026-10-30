# Day 1.1 — JavaScript Basics, Variables, and Scope

## 1. Learning Objectives

By the end of this session, students should be able to:

- Understand JavaScript execution.
- Use `var`, `let`, and `const`.
- Explain global, function, and block scope.
- Understand variable shadowing.
- Identify common scope-related errors.

## 2. Topics Covered

1. JavaScript execution basics
2. Variables and declarations
3. `var`, `let`, and `const`
4. Global scope
5. Function scope
6. Block scope
7. Variable shadowing

---

## Topic 1: JavaScript Execution Basics

JavaScript generally executes synchronous statements from top to bottom.

### Example

```js
console.log("Program started");

const name = "Asha";

console.log(name);
console.log("Program finished");
```

**Output:**

```text
Program started
Asha
Program finished
```

**Explanation:** JavaScript executes each statement in order. The variable `name` is initialized before its value is printed.

## Topic 2: Variables and Declarations

Variables allow us to store and access values in a program.

```js
var studentName = "Rahul";
let marks = 75;
const course = "MERN Stack";

console.log(studentName);
console.log(marks);
console.log(course);
```

**Explanation:**

- `var` declares a variable with function scope.
- `let` declares a block-scoped variable that can be reassigned.
- `const` declares a block-scoped binding that cannot be reassigned.

### Choosing the Right Keyword

```js
const studentName = "Rahul";
let completedTasks = 0;

completedTasks = completedTasks + 1;

console.log(completedTasks); // 1
```

Use `const` by default. Use `let` when reassignment is required. Avoid `var` in most modern application code.

## Topic 3: `var`, `let`, and `const`

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function | Block | Block |
| Reassignment | Yes | Yes | No |
| Redeclaration in same scope | Yes | No | No |
| Must initialize immediately | No | No | Yes |

### Example: Reassignment

```js
let age = 20;
age = 21;

console.log(age); // 21
```

Reassigning a `const` binding produces an error.

```js
const city = "Anand";

// city = "Surat"; // TypeError
```

**Important:** `const` does not make objects immutable.

```js
const student = { name: "Rahul", marks: 75 };

student.marks = 90; // Allowed

console.log(student.marks); // 90
```

The object's property can change, but the variable `student` cannot be reassigned.

## Topic 4: Global Scope

A top-level variable can generally be accessed by functions within the same script, subject to module and environment rules.

```js
const institute = "Code Academy";

function showInstitute() {
  console.log(institute);
}

showInstitute(); // Code Academy
```

Avoid declaring every variable globally because it makes code harder to maintain.

## Topic 5: Function Scope

Variables declared inside a function are accessible within that function and its nested scopes.

```js
function calculateTotal() {
  const price = 500;
  const quantity = 3;

  return price * quantity;
}

console.log(calculateTotal()); // 1500
```

Trying to access `price` outside the function produces a `ReferenceError`.

## Topic 6: Block Scope

A block is a section of code surrounded by `{}`. Variables declared with `let` and `const` are block-scoped.

```js
if (true) {
  let message = "Hello";
  const score = 100;

  console.log(message, score);
}

// console.log(message); // ReferenceError
```

Unlike `let` and `const`, `var` is not restricted to the block.

```js
if (true) {
  var first = 10;
  let second = 20;
}

console.log(first); // 10
// console.log(second); // ReferenceError
```

## Topic 7: Variable Shadowing

Shadowing happens when a variable in an inner scope has the same name as a variable in an outer scope.

```js
const city = "Anand";

function showCity() {
  const city = "Ahmedabad";
  console.log(city);
}

showCity();        // Ahmedabad
console.log(city); // Anand
```

The inner variable is used inside the function, while the outer variable remains unchanged.

---

## 3. Practice Tasks — Day 1.1

### Task 1: JavaScript Basics

Create variables for your name, age, city, and course. Print a formatted introduction.

### Task 2: Variables

Create a student profile using `const` and `let`. Update the task count twice and explain why you selected each keyword.

### Task 3: Scope

Write separate examples demonstrating:

- Global scope
- Function scope
- Block scope
- `var` versus `let` inside an `if` block

### Task 4: Variable Shadowing

Create an outer variable named `marks` and a separate `marks` variable inside a function. Print both values and explain the output.

### Task 5: Shopping Bill

Write `calculateBill(price, quantity)` that returns the total. Keep temporary variables inside the function.

### Task 6: Debugging

Fix the following code and explain the errors.

```js
function showStudent() {
  const name = "Asha";
  let marks = 80;
}

showStudent();

console.log(name);
console.log(marks);
```

## 4. Review Questions

1. What is a variable?
2. What is the difference between `let` and `const`?
3. What is the difference between function scope and block scope?
4. Why is `var` generally avoided in modern JavaScript?
5. Does `const` make an object immutable?
6. What is variable shadowing?
7. Why should variables be declared in the smallest appropriate scope?

## Completion Criteria

Students should be able to explain the examples, complete the tasks independently, and identify scope-related errors.
