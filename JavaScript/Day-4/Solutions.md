# Day 4 — Promises, Async/Await, Event Loop and APIs: Solutions

## Section A — MCQs
1. B  2. C  3. B  4. C  5. B
6. B  7. B  8. A  9. C  10. B
11. B  12. B  13. A  14. B  15. B
16. C  17. C  18. B  19. A  20. C
21. A  22. B  23. D  24. A  25. B
26. B  27. B  28. A  29. B  30. B

## Section B — Predict the Output
Q1:
```text
Start
Middle
End
```
Q2:
```text
A
C
B
```
Q3:
```text
Start
End
Promise
Timer
```
Q4: `1`, `3`, `2`  
Q5: `C`, `A`, `B`  
Q6: `11`  
Q7: `Done`, then `25`  
Q8: `Failed`, then `Recovered`  
Q9: `Start`, `End`, `Promise 1`, `Promise 2`, `Timer`  
Q10: `A`, `D`, `B`, `C`

## Section C — Debugging
### Q1. Handle a Promise
```javascript
const promise = Promise.resolve("Success");
promise.then(value => console.log(value));
```

### Q2. Await inside async function
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

### Q3. Check HTTP status
```javascript
async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("Could not load users:", error.message);
  }
}
loadUsers();
```
`fetch()` normally rejects for network failures, not merely because the server returned 404/500. Check `response.ok`.

### Q4. Timer order
The original prints First, Third, Second because synchronous statements finish before the timer task. If all three messages must print in the requested order, use:
```javascript
console.log("First");
console.log("Second");
console.log("Third");
```
If the second action is genuinely asynchronous, await its Promise before logging Third.

## Section D — Coding Exercises
### Q1. ES modules
**math.js**
```javascript
export function isEven(number) {
  return number % 2 === 0;
}
```
**app.js**
```javascript
import { isEven } from "./math.js";
console.log(isEven(8)); // true
console.log(isEven(7)); // false
```
Use a browser script tag with `type="module"` or a Node.js project configured for ES modules.

### Q2. Promise and async/await
```javascript
function getMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Task completed"), 1000);
  });
}
async function showMessage() {
  try {
    console.log(await getMessage());
  } catch (error) {
    console.error(error.message);
  }
}
showMessage();
```

### Q3. Concurrent API requests
```javascript
async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
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
    console.error("Request failed:", error.message);
  }
}
loadData();
```
Expected successful counts for JSONPlaceholder: 10 users and 100 posts.

## Section E — Mini Project: API-Based User Directory

Create these three files in one folder.

**index.html**
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Directory</title>
</head>
<body>
  <h1>User Directory</h1>
  <p id="status" role="status">Loading users...</p>
  <ul id="user-list"></ul>
  <script type="module" src="./app.js"></script>
</body>
</html>
```

**users.js**
```javascript
export async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error(`Server returned HTTP ${response.status}`);
  }
  const users = await response.json();
  if (!Array.isArray(users)) {
    throw new Error("Unexpected response format");
  }
  return users;
}
```

**app.js**
```javascript
import { fetchUsers } from "./users.js";

const status = document.querySelector("#status");
const userList = document.querySelector("#user-list");

function renderUsers(users) {
  userList.replaceChildren();
  users.forEach(user => {
    const item = document.createElement("li");
    const city = user.address?.city ?? "Unknown city";
    item.textContent = `${user.name} — ${user.email} — ${city}`;
    userList.append(item);
  });
}

async function init() {
  status.textContent = "Loading users...";
  try {
    const users = await fetchUsers();
    renderUsers(users);
    status.textContent = `Loaded ${users.length} users.`;
  } catch (error) {
    status.textContent = `Unable to load users: ${error.message}`;
  }
}
init();
```

Open through a local development server (not necessarily by double-clicking the HTML file), because browser modules may be restricted on file URLs.

## Section F — Viva: Short Answers
1. Named exports are imported by their exported name in braces; a default export can be imported using any local name.
2. A Promise represents a future result; the resolved value is the actual data produced.
3. Promise callbacks are microtasks; timer callbacks are tasks. Microtasks are drained before the next task.
4. fetch returns a Response object; response.json() reads and parses its body asynchronously.
5. Sequential work waits for one operation before starting the next; Promise.all starts independent Promise operations together and collects their results.
