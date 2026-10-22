# Day 4 — JavaScript Solutions

This folder contains solutions for ES Modules, the JavaScript event loop, Promises, async/await, error handling, and concurrent API requests.

## Files
- `Day4-Task1-math.js` and `Day4-Task1-main.js`: named exports/imports.
- `Day4-Task2.js`: call stack, tasks, and microtasks.
- `Day4-Task3.js`: Promise chaining, async/await, and error handling.
- `Day4-Task4.js`: concurrent API requests with `Promise.all()`.
- `API-User-Directory/`: browser mini-project using ES modules and JSONPlaceholder.

## Run the Node.js examples
Install a recent version of Node.js, then run these commands from this folder:

```bash
node Day4-Task2.js
node Day4-Task3.js
node Day4-Task4.js
node Day4-Task1-main.js
```

Task 1 uses ES modules; `package.json` sets `"type": "module"`.

## Run the browser project
Open `API-User-Directory/index.html` using VS Code Live Server or another local HTTP server. Do not open it directly with `file://`, because browser ES modules may be blocked.

## Key concepts
- Synchronous code runs before queued callbacks.
- Promise callbacks run as microtasks; timer callbacks run as tasks.
- An `async` function always returns a Promise.
- `fetch()` does not reject just because the server responds with HTTP 404 or 500; check `response.ok`.
- `Promise.all()` runs independent requests concurrently and rejects if one request rejects.
