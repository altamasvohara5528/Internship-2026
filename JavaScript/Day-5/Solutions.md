# Day 5 — Modern JavaScript, JSON, reduce and Storage: Solutions

## Section A — MCQs
1. B  2. A  3. B  4. C  5. C
6. B  7. B  8. C  9. A  10. C

## Section B — Predict the Output
Q1: `10`, then `0`  
Q2: `10`  
Q3: `{"name":"Mouse","price":500}`  
Q4: `2`  
Q5:
```text
[100, 200, 300]
[300, 100, 200]
```

## Section C — Debugging
### Q1. Parse JSON text
```javascript
const json = '{"name":"Asha","age":21}';
const user = JSON.parse(json);
console.log(user.name); // Asha
```
`JSON.stringify()` converts a JavaScript value to JSON text; `JSON.parse()` does the reverse.

### Q2. Sort numerically without changing original
```javascript
const prices = [100, 20, 300, 5];
const sorted = [...prices].sort((a, b) => a - b);
console.log(sorted); // [5, 20, 100, 300]
console.log(prices); // [100, 20, 300, 5]
```

### Q3. Save and restore an array
```javascript
const tasks = ["Learn JS", "Practice React"];
localStorage.setItem("tasks", JSON.stringify(tasks));
const savedTasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");
console.log(savedTasks);
```
Wrap parsing and storage access in try/catch in a real app.

## Section D — Coding Exercises
### Q1. Optional chaining and nullish coalescing
```javascript
function getUserCity(user) {
  return user?.address?.city ?? "Unknown city";
}
console.log(getUserCity({ address: { city: "Anand" } }));
console.log(getUserCity({}));
```

### Q2. Convert products to JSON and back
```javascript
const products = [
  { id: 1, name: "Keyboard", price: 800 },
  { id: 2, name: "Mouse", price: 500 }
];
const jsonText = JSON.stringify(products);
const parsedProducts = JSON.parse(jsonText);
console.log(jsonText);
console.log(parsedProducts);
```

### Q3. Total cost using reduce
```javascript
const products = [
  { name: "Pen", price: 10, quantity: 5 },
  { name: "Notebook", price: 50, quantity: 2 },
  { name: "Bag", price: 700, quantity: 1 }
];
const totalCost = products.reduce(
  (total, product) => total + product.price * product.quantity,
  0
);
console.log(totalCost); // 850
```

### Q4. Save and retrieve tasks
```javascript
const tasks = ["Learn JavaScript", "Practice React"];
try {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  const savedText = localStorage.getItem("tasks");
  const savedTasks = savedText ? JSON.parse(savedText) : [];
  console.log(savedTasks);
} catch (error) {
  console.error("Storage error:", error.message);
}
```

## Section E — Mini Project: Persistent Task Manager

Create the following files in one folder.

**index.html**
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Persistent Task Manager</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="container">
    <h1>Task Manager</h1>
    <form id="task-form">
      <input id="task-input" type="text" placeholder="Enter a task" required>
      <button type="submit">Add Task</button>
    </form>
    <p id="status" role="status"></p>
    <ul id="task-list"></ul>
  </main>
  <script src="app.js" defer></script>
</body>
</html>
```

**style.css**
```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 2rem;
  background: #f4f6f8;
}
.container {
  max-width: 600px;
  margin: auto;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
}
form { display: flex; gap: 0.5rem; }
input { flex: 1; padding: 0.7rem; }
button { padding: 0.7rem 1rem; cursor: pointer; }
li { display: flex; gap: 0.7rem; align-items: center; margin: 0.8rem 0; }
.completed { text-decoration: line-through; color: #666; }
.delete-button { margin-left: auto; }
```

**app.js**
```javascript
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const status = document.querySelector("#status");
let tasks = loadTasks();

function loadTasks() {
  try {
    const saved = localStorage.getItem("tasks");
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Could not read saved tasks:", error);
    return [];
  }
}

function saveTasks() {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (error) {
    status.textContent = "Could not save tasks in this browser.";
    console.error(error);
  }
}

function renderTasks() {
  list.replaceChildren();
  tasks.forEach(task => {
    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", `Mark ${task.title} completed`);
    checkbox.addEventListener("change", () => toggleTask(task.id));

    const label = document.createElement("span");
    label.textContent = task.title;
    if (task.completed) label.classList.add("completed");

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => deleteTask(task.id));

    item.append(checkbox, label, deleteButton);
    list.append(item);
  });
}

function addTask(title) {
  const cleanTitle = title.trim();
  if (!cleanTitle) return;
  tasks.push({ id: Date.now(), title: cleanTitle, completed: false });
  saveTasks();
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

form.addEventListener("submit", event => {
  event.preventDefault();
  addTask(input.value);
  input.value = "";
  input.focus();
});

renderTasks();
```

### How persistence works
The application converts the tasks array to JSON text with `JSON.stringify()` before saving it under the `tasks` key in localStorage. When the page loads, it reads the string and uses `JSON.parse()` to restore the array. Missing or malformed data is handled safely. Completed/deleted tasks are saved again after each change.

## Section F — Viva: Short Answers
1. `||` uses the fallback for any falsy value (including 0, false, and empty string); `??` uses it only for null or undefined.
2. JSON.stringify converts JavaScript data into JSON text for storage or transfer.
3. reduce processes array elements and combines them into one accumulated result.
4. localStorage persists until removed; sessionStorage lasts for the page session/tab.
5. Same-origin JavaScript can read browser storage. A cross-site scripting (XSS) vulnerability may expose it, so do not store passwords or sensitive secrets there.
