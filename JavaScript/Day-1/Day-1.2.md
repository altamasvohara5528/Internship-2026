# Day 1.2 — Hoisting, Execution Context, and Call Stack

## 1. Learning Objectives

By the end of this session, students should be able to:

- Explain hoisting and the Temporal Dead Zone.
- Understand function declaration hoisting.
- Explain execution context.
- Trace function calls using the call stack.
- Debug common initialization errors.

## 2. Topics Covered

1. Hoisting
2. Hoisting with `var`
3. `let`, `const`, and the Temporal Dead Zone
4. Function declarations and expressions
5. Execution context
6. Call stack

---

## Topic 1: Hoisting

Hoisting describes how JavaScript processes declarations before executing statements in their scope. It does not mean that JavaScript literally moves every declaration to the top of the source file.

## Topic 2: Hoisting with `var`

```js
console.log(score);

var score = 50;

console.log(score);
```

**Output:**

```text
undefined
50
```

The `var` declaration is processed before execution reaches the assignment. Its initial value is `undefined`.

A simplified mental model is:

```js
var score;

console.log(score);

score = 50;

console.log(score);
```

## Topic 3: `let`, `const`, and the Temporal Dead Zone

Variables declared with `let` and `const` cannot be accessed before initialization.

```js
console.log(marks);

let marks = 80;
```

This produces a `ReferenceError`.

The period between entering the scope and initializing the variable is called the **Temporal Dead Zone (TDZ)**.

| Declaration | Access before initialization |
|---|---|
| `var` | Returns `undefined` |
| `let` | Throws `ReferenceError` |
| `const` | Throws `ReferenceError` |

## Topic 4: Function Declarations and Expressions

### Function Declaration

A function declaration can generally be called before its declaration.

```js
greet();

function greet() {
  console.log("Hello!");
}
```

**Output:**

```text
Hello!
```

### Function Expression

A function expression assigns a function to a variable.

```js
const greet = function () {
  console.log("Hello!");
};

greet();
```

Calling `greet()` before this `const` variable is initialized produces a `ReferenceError`.

**Key difference:** Function declarations can be called before their declaration, but a function expression assigned to a `const` variable must be initialized first.

## Topic 5: Execution Context

An execution context is the environment in which JavaScript code runs.

For this session, focus on the global execution context and the function execution contexts created when functions are called.

```js
function calculateTotal(price, quantity) {
  const total = price * quantity;
  return total;
}

const result = calculateTotal(100, 3);

console.log(result); // 300
```

**Execution flow:**

1. The top-level script starts.
2. `calculateTotal()` is called.
3. The function receives its arguments.
4. It calculates and returns `300`.
5. The calling code stores the result and prints it.

## Topic 6: Call Stack

The call stack tracks active function calls. When one function calls another, the called function executes first. Once it finishes, control returns to the caller.

```js
function second() {
  console.log("Inside second");
}

function first() {
  console.log("Inside first");
  second();
  console.log("First finished");
}

first();
```

**Output:**

```text
Inside first
Inside second
First finished
```

While `second()` runs, the active call stack is conceptually:

```text
Top
┌──────────────┐
│ second()     │
├──────────────┤
│ first()      │
├──────────────┤
│ Global code  │
└──────────────┘
Bottom
```

When `second()` finishes, JavaScript resumes execution inside `first()`.

---

## 3. Practice Tasks — Day 1.2

### Task 1: Hoisting

Run this code and explain the output.

```js
console.log(price);

var price = 100;

console.log(price);
```

### Task 2: TDZ

Explain why this code fails and correct it.

```js
console.log(course);

const course = "MERN Stack";
```

### Task 3: Function Comparison

Create one function declaration and one function expression that calculate the square of a number. Test calling each before its declaration or initialization.

### Task 4: Call Stack

Predict the output and draw the call stack when `third()` is running.

```js
function third() {
  console.log("Third");
}

function second() {
  console.log("Second");
  third();
  console.log("Second finished");
}

function first() {
  console.log("First");
  second();
  console.log("First finished");
}

first();
```

### Task 5: Debugging

Find and fix the errors.

```js
printMessage();

const message = "Welcome";

function printMessage() {
  console.log(message);
}
```

Explain why the function declaration is not the problem.

### Task 6: Execution Flow

Write a function that accepts a price and quantity, calculates the total, and returns it. Explain the execution flow from the function call to the returned result.

## 4. Review Questions

1. What is hoisting?
2. Why does `var` return `undefined` before assignment?
3. What is the Temporal Dead Zone?
4. Why does accessing an uninitialized `let` variable cause an error?
5. What is the difference between a function declaration and a function expression?
6. What is an execution context?
7. What does the call stack track?
8. What happens when one function calls another?

## Completion Criteria

Students should be able to predict the output of hoisting examples, explain function execution, and debug initialization errors.
