# Day 4 — JavaScript Practice Workbook

**Topics:** ES Modules, error handling, event loop, call stack, task queues, Promises, `async/await`, Promise chaining, concurrent execution, `fetch()`, and API error handling.

**Total Marks:** 100  
**Suggested Duration:** 90–120 minutes  
**Instructions:** Attempt every question. For output questions, write the exact output in the correct order. For coding questions, use meaningful variable names and handle errors appropriately.

---

# Section A — MCQs (30 Marks)

*30 questions × 1 mark each.*

### Q1. Which keyword exports a named function from an ES module?

A. `include`  
B. `export`  
C. `require`  
D. `publish`

### Q2. Which block handles an exception thrown inside a corresponding `try` block?

A. `then`  
B. `finally`  
C. `catch`  
D. `await`

### Q3. What are the three states of a Promise?

A. Start, stop, pause  
B. Pending, fulfilled, rejected  
C. Open, closed, failed  
D. True, false, null

### Q4. What does an `async` function always return?

A. An array  
B. A string  
C. A Promise  
D. `undefined`

### Q5. Where is `await` commonly used to pause the execution of an async function until a Promise settles?

A. Inside any ordinary function without restrictions  
B. Inside an `async` function  
C. Only inside a `for` loop  
D. Only inside a `try` block

### Q6. What does `JSON.parse()` do?

A. Converts an object into a JSON string  
B. Converts a JSON string into a JavaScript value  
C. Sends an HTTP request  
D. Creates a Promise

### Q7. Which statement about `fetch()` is correct?

A. It automatically rejects for every HTTP 404 response.  
B. It returns a Promise.  
C. It returns parsed JSON directly.  
D. It only works in Node.js.

### Q8. What does `response.ok` indicate?

A. The HTTP status is in the successful 200–299 range.  
B. The response contains an array.  
C. The network is offline.  
D. The response has no body.

### Q9. Which method is commonly used to handle a rejected Promise in a Promise chain?

A. `.map()`  
B. `.filter()`  
C. `.catch()`  
D. `.keys()`

### Q10. What happens when an input Promise rejects in `Promise.all()`?

A. The rejection is always ignored.  
B. The returned Promise rejects.  
C. The rejected Promise becomes `null`.  
D. All requests are automatically retried.

### Q11. What is the call stack responsible for?

A. Storing all API responses permanently  
B. Tracking function calls currently being executed  
C. Saving browser history  
D. Storing only rejected Promises

### Q12. Which task normally executes first?

A. A `setTimeout(..., 0)` callback  
B. A synchronous `console.log()` statement that follows a timer registration  
C. Every Promise callback  
D. Every `async` function before its first `await`

### Q13. Which callback normally runs before a timer callback when both are ready after the current synchronous code?

A. A Promise `.then()` callback  
B. A `setTimeout()` callback  
C. A random callback  
D. Neither callback can execute

### Q14. What is the purpose of the JavaScript event loop?

A. To convert JavaScript into HTML  
B. To coordinate execution of queued callbacks when the call stack is available  
C. To permanently store variables  
D. To prevent all asynchronous operations

### Q15. What is a microtask?

A. A type of database transaction  
B. A queued task such as a Promise reaction callback  
C. A synchronous function call  
D. A type of JavaScript variable

### Q16. Which of these is normally scheduled as a task (often called a macrotask)?

A. A Promise `.then()` callback  
B. A `queueMicrotask()` callback  
C. A `setTimeout()` callback  
D. An `await` keyword by itself

### Q17. What does this code print?

```javascript
console.log("A");

Promise.resolve().then(() => console.log("B"));

console.log("C");
```

A. A, B, C  
B. B, A, C  
C. A, C, B  
D. C, B, A

### Q18. What happens when JavaScript reaches `await` followed by a Promise inside an async function?

A. The entire JavaScript thread permanently stops.  
B. The async function suspends until the awaited result is available, allowing other work to proceed.  
C. The Promise is automatically rejected.  
D. The function becomes synchronous.

### Q19. What is the output?

```javascript
async function getValue() {
  return 10;
}

console.log(getValue() instanceof Promise);
```

A. `true`  
B. `false`  
C. `10`  
D. `undefined`

### Q20. What is the output?

```javascript
Promise.resolve(4)
  .then(value => value * 2)
  .then(value => value + 3)
  .then(console.log);
```

A. `4`  
B. `8`  
C. `11`  
D. `7`

### Q21. What happens when a `.then()` callback returns a normal value?

A. The next Promise in the chain receives that value.  
B. The chain immediately rejects.  
C. The value is discarded in every case.  
D. The next callback never executes.

### Q22. What happens if an exception is thrown inside a `.then()` callback?

A. It is always ignored.  
B. The next Promise in the chain becomes rejected unless the error is handled.  
C. The browser automatically reloads.  
D. The Promise becomes fulfilled with `undefined`.

### Q23. Which Promise method waits until every input Promise has settled, whether fulfilled or rejected?

A. `Promise.race()`  
B. `Promise.any()`  
C. `Promise.all()`  
D. `Promise.allSettled()`

### Q24. Which method fulfills as soon as one input Promise fulfills, ignoring earlier rejections unless all inputs reject?

A. `Promise.any()`  
B. `Promise.all()`  
C. `Promise.allSettled()`  
D. `Promise.race()`

### Q25. What does `Promise.race()` do?

A. Waits for every Promise to finish  
B. Settles according to the first input Promise to settle  
C. Returns only successful results in an array  
D. Automatically retries failed Promises

### Q26. Which statement about `Promise.all()` is correct?

A. It executes each operation only after the previous one finishes.  
B. It is useful for waiting for multiple independent Promises and collecting their results.  
C. It ignores every error.  
D. It always returns the fastest result.

### Q27. Why should code check `response.ok` after a `fetch()` request?

A. Because `fetch()` rejects automatically for all HTTP error statuses  
B. Because HTTP error responses such as 404 generally still fulfill the `fetch()` Promise  
C. Because `response.ok` parses JSON  
D. Because it converts a GET request into POST

### Q28. What is the purpose of `Promise.finally()`?

A. To run cleanup logic after a Promise settles  
B. To convert every rejection into success  
C. To retry an API request  
D. To parse JSON automatically

### Q29. Which is the correct way to import a named export called `calculateTotal`?

A. `import calculateTotal from "./math.js";`  
B. `import { calculateTotal } from "./math.js";`  
C. `include calculateTotal from "./math.js";`  
D. `require { calculateTotal } from "./math.js";`

### Q30. What is the main danger of performing a very long synchronous computation on the browser's main thread?

A. It makes every Promise resolve immediately.  
B. It can block user interactions and delay rendering.  
C. It automatically creates more threads.  
D. It prevents JavaScript variables from being declared.

---

# Section B — Predict the Output (20 Marks)

*10 questions × 2 marks each.*

Write the exact output in the correct order.

### Q1. Synchronous Execution

```javascript
console.log("Start");
console.log("Middle");
console.log("End");
```

### Q2. Promise and Synchronous Code

```javascript
console.log("A");

Promise.resolve().then(() => console.log("B"));

console.log("C");
```

### Q3. Timer and Promise

```javascript
console.log("Start");

setTimeout(() => console.log("Timer"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

### Q4. Async/Await

```javascript
async function test() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}

test();
console.log(3);
```

### Q5. Multiple Microtasks

```javascript
Promise.resolve().then(() => console.log("A"));
Promise.resolve().then(() => console.log("B"));

console.log("C");
```

### Q6. Promise Chaining

```javascript
Promise.resolve(5)
  .then(value => value * 2)
  .then(value => value + 1)
  .then(value => console.log(value));
```

### Q7. Async Return Value

```javascript
async function getNumber() {
  return 20;
}

getNumber().then(value => console.log(value + 5));
console.log("Done");
```

### Q8. Error Propagation

```javascript
Promise.resolve()
  .then(() => {
    throw new Error("Failed");
  })
  .catch(error => {
    console.log(error.message);
    return "Recovered";
  })
  .then(value => console.log(value));
```

### Q9. Nested Microtask and Timer

```javascript
console.log("Start");

setTimeout(() => console.log("Timer"), 0);

Promise.resolve().then(() => {
  console.log("Promise 1");

  Promise.resolve().then(() => {
    console.log("Promise 2");
  });
});

console.log("End");
```

### Q10. Sequential Async Execution

```javascript
async function run() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
  await Promise.resolve();
  console.log("C");
}

run();
console.log("D");
```

---

# Section C — Debugging (20 Marks)

*4 questions × 5 marks each.*

### Q1. Promise Handling

Fix the code so the resolved value is printed instead of the Promise object.

```javascript
const promise = Promise.resolve("Success");

console.log(promise);
```

### Q2. Incorrect Use of Await

Fix the code so that the awaited value is logged correctly.

```javascript
function getData() {
  return Promise.resolve("Data loaded");
}

function displayData() {
  const data = await getData();
  console.log(data);
}

displayData();
```

### Q3. Fetch Error Handling

Identify the problem and correct the code so HTTP error responses are handled properly.

```javascript
async function loadUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error(error.message);
  }
}

loadUsers();
```

### Q4. Incorrect Execution Order

A student expects `"Second"` to print before `"Third"`. Explain why this expectation is incorrect and fix the code if the requirement is to print `"Second"` before `"Third"`.

```javascript
console.log("First");

setTimeout(() => console.log("Second"), 0);

console.log("Third");
```

---

# Section D — Coding Exercises (15 Marks)

*3 questions × 5 marks each.*

### Q1. ES Modules

Create two files:

- `math.js`
- `app.js`

Export a named function `isEven(number)` from `math.js`. Import it into `app.js` and print whether `8` and `7` are even.

### Q2. Promise and Async/Await

Write a function called `getMessage()` that returns a Promise resolving after one second with the message `"Task completed"`.

Create an async function that awaits the result and prints the message. Handle errors using `try...catch`.

### Q3. Sequential vs Concurrent Requests

Write an async function that requests these two endpoints:

- `https://jsonplaceholder.typicode.com/users`
- `https://jsonplaceholder.typicode.com/posts`

Use `Promise.all()` to request both resources concurrently. Check HTTP status codes, parse both JSON responses, and print the number of users and posts. Handle errors appropriately.

---

# Section E — Mini Project: API-Based User Directory (10 Marks)

Build a small JavaScript application that retrieves and displays user information from JSONPlaceholder.

## Requirements

1. Fetch users from `https://jsonplaceholder.typicode.com/users`.
2. Use `async/await` to handle the request.
3. Check `response.ok` before parsing the response.
4. Parse the JSON response.
5. Display each user's name, email, and city.
6. Handle network, HTTP, and JSON parsing errors gracefully.
7. Separate the fetch logic into a reusable function.
8. Show a loading message while the request is in progress.
9. Show an appropriate error message if the request fails.
10. Use ES module imports and exports if the application contains multiple JavaScript files.

**Submission:** HTML, CSS, and JavaScript source files, plus a short explanation of the request flow and error handling.

## Suggested evaluation

- API request and JSON parsing: 2 marks
- HTTP status validation: 2 marks
- Rendering user information: 2 marks
- Loading and error states: 2 marks
- Reusable functions and code organization: 2 marks

---

# Section F — Viva Questions (5 Marks)

*5 questions × 1 mark each.*

1. What is the difference between a named export and a default export?
2. What is the difference between a Promise and the value it eventually produces?
3. What is the difference between the microtask queue and the task queue?
4. Why does `fetch()` need a separate `response.json()` call?
5. What is the difference between sequential execution and concurrent execution using `Promise.all()`?

---

# Instructor Answer Key

**Do not distribute this section to students before the assessment.**

## Section A — MCQ Answers

| Q | Answer | Explanation |
|---|---|---|
| 1 | B | `export` exposes a module member. |
| 2 | C | `catch` handles a thrown exception. |
| 3 | B | A Promise is pending, fulfilled, or rejected. |
| 4 | C | An async function always returns a Promise. |
| 5 | B | `await` is used inside async functions in this workbook. Modern JavaScript also supports top-level `await` in modules. |
| 6 | B | `JSON.parse()` converts JSON text into a JavaScript value. |
| 7 | B | `fetch()` returns a Promise. |
| 8 | A | `response.ok` is true for HTTP statuses 200–299. |
| 9 | C | `.catch()` handles a rejection. |
| 10 | B | `Promise.all()` rejects if an input rejects. |
| 11 | B | The call stack tracks active function execution. |
| 12 | B | Synchronous code runs before queued callbacks. |
| 13 | A | Promise reactions normally run as microtasks before timer tasks. |
| 14 | B | The event loop coordinates queued work with available execution time. |
| 15 | B | Promise reactions and `queueMicrotask()` callbacks are examples of microtasks. |
| 16 | C | `setTimeout()` schedules a timer task. |
| 17 | C | The synchronous logs run before the Promise callback. |
| 18 | B | The async function suspends at `await`; other work can proceed. |
| 19 | A | Calling an async function returns a Promise. |
| 20 | C | `4 × 2 + 3 = 11`. |
| 21 | A | The next `.then()` receives the returned value. |
| 22 | B | A thrown error rejects the resulting Promise. |
| 23 | D | `Promise.allSettled()` waits for all inputs to settle. |
| 24 | A | `Promise.any()` fulfills on the first fulfillment. |
| 25 | B | `Promise.race()` settles with the first settled input. |
| 26 | B | It collects results from independent Promises if all fulfill. |
| 27 | B | HTTP errors generally do not cause `fetch()` itself to reject. |
| 28 | A | `.finally()` is useful for cleanup. |
| 29 | B | Named imports use curly braces. |
| 30 | B | Long synchronous work can block the main thread. |

## Section B — Expected Outputs

### Q1

```text
Start
Middle
End
```

### Q2

```text
A
C
B
```

### Q3

```text
Start
End
Promise
Timer
```

### Q4

```text
1
3
2
```

### Q5

```text
C
A
B
```

### Q6

```text
11
```

### Q7

```text
Done
25
```

### Q8

```text
Failed
Recovered
```

### Q9

```text
Start
End
Promise 1
Promise 2
Timer
```

### Q10

```text
A
D
B
C
```

## Section C — Suggested Corrections

### Q1

```javascript
const promise = Promise.resolve("Success");

promise.then(value => console.log(value));
```

Expected output:

```text
Success
```

### Q2

```javascript
function getData() {
  return Promise.resolve("Data loaded");
}

async function displayData() {
  const data = await getData();
  console.log(data);
}

displayData();
```

The problem is that `await` is used inside a function that is not declared `async`.

### Q3

```javascript
async function loadUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error(error.message);
  }
}

loadUsers();
```

The original code handles network failures and parsing errors, but it does not explicitly handle HTTP error responses.

### Q4

The timer callback is asynchronous. The synchronous statement `console.log("Third")` runs before the timer callback.

Expected output from the original code:

```text
First
Third
Second
```

To guarantee the required order, use synchronous logging:

```javascript
console.log("First");
console.log("Second");
console.log("Third");
```

If the second operation must remain asynchronous, the solution should instead wait for that operation before printing `"Third"`.

## Section D — Suggested Solutions

### Q1. ES Modules

**`math.js`**

```javascript
export function isEven(number) {
  return number % 2 === 0;
}
```

**`app.js`**

```javascript
import { isEven } from "./math.js";

console.log(isEven(8));
console.log(isEven(7));
```

Expected output:

```text
true
false
```

Run this in an environment configured for ES modules, such as a browser using `<script type="module">`.

### Q2. Promise and Async/Await

```javascript
function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task completed");
    }, 1000);
  });
}

async function displayMessage() {
  try {
    const message = await getMessage();
    console.log(message);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

displayMessage();
```

Expected output after approximately one second:

```text
Task completed
```

### Q3. Sequential vs Concurrent Requests

```javascript
async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
}

async function loadData() {
  try {
    const [users, posts] = await Promise.all([
      fetchJson("https://jsonplaceholder.typicode.com/users"),
      fetchJson("https://jsonplaceholder.typicode.com/posts")
    ]);

    console.log("Users:", users.length);
    console.log("Posts:", posts.length);
  } catch (error) {
    console.error("Failed to load data:", error.message);
  }
}

loadData();
```

Expected successful output:

```text
Users: 10
Posts: 100
```

The requests are initiated concurrently because neither result depends on the other.

## Section E — Evaluation Guidance

Award marks based on the requirements listed in the project section. Check that students:

- Do not treat an HTTP 404 or 500 response as a successful result.
- Handle loading, success, and error states.
- Render user data safely using DOM APIs such as `textContent`.
- Keep the fetch logic separate from the display logic.
- Avoid duplicating request and error-handling code.

## Section F — Expected Concepts

1. **Named vs default exports:** Named exports are imported by their exported names; a default export can be imported with a chosen local name.
2. **Promise vs value:** A Promise represents a result that may become available later; the resolved value is the actual result.
3. **Microtask vs task queue:** Promise reactions and `queueMicrotask()` callbacks run as microtasks. Timer callbacks are tasks. Microtasks are generally drained before the event loop moves to the next task.
4. **`response.json()`:** `fetch()` provides a Response object. `response.json()` asynchronously reads and parses its body.
5. **Sequential vs concurrent:** Sequential operations wait for each previous result before starting the next dependent operation. Concurrent independent operations can be started together with `Promise.all()`.

---

# Instructor Notes

- Give students approximately 30 minutes for MCQs and output prediction.
- Use the remaining time for debugging, coding, and the mini-project.
- Ask students to explain *why* each output occurs, not just memorize the order.
- For stronger students, ask what changes if a Promise rejects, if a timer has a longer delay, or if one request in `Promise.all()` fails.
- Keep the assessment focused on reasoning, readable code, and correct error handling rather than memorized syntax alone.
