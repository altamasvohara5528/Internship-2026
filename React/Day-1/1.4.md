#  Day 1.4: React Fundamentals — Exercises and Assessment

---

# Section A — Multiple-Choice Questions

**20 questions × 1 mark = 20 marks**

Choose one correct answer for each question.

### Question 1

What is React primarily used for?

A. Managing database tables  
B. Building user interfaces  
C. Replacing JavaScript  
D. Hosting backend servers

### Question 2

Which tool is commonly used to scaffold and run a React project in this internship?

A. Vite  
B. MongoDB  
C. Express  
D. Mongoose

### Question 3

Which command installs the dependencies listed in `package.json`?

A. `npm start-project`  
B. `npm create`  
C. `npm install`  
D. `node install`

### Question 4

Which file commonly mounts a React application into the root HTML element in a Vite React project?

A. `package-lock.json`  
B. `main.jsx`  
C. `vite.config.js`  
D. `README.md`

### Question 5

What is JSX?

A. A database query language  
B. A JavaScript syntax extension used to describe UI  
C. A CSS framework  
D. A replacement for npm

### Question 6

Which is the correct JSX attribute for a CSS class?

A. `class="card"`  
B. `className="card"`  
C. `cssClass="card"`  
D. `class-name="card"`

### Question 7

How do you display a JavaScript variable named `studentName` in JSX?

A. `<p>studentName</p>`  
B. `<p>(studentName)</p>`  
C. `<p>{studentName}</p>`  
D. `<p>[studentName]</p>`

### Question 8

Which is a valid way to return multiple sibling JSX elements?

A. Return adjacent elements without a wrapper  
B. Group them inside a fragment `<>...</>`  
C. Place one `return` inside another  
D. Remove all closing tags

### Question 9

What is a React component?

A. A reusable piece of UI  
B. A CSS property  
C. A database collection  
D. A terminal command

### Question 10

Which component name follows the usual React convention?

A. `studentCard`  
B. `student-card`  
C. `StudentCard`  
D. `STUDENT-CARD`

### Question 11

What are props used for?

A. Passing inputs from a parent component to a child  
B. Saving data permanently in a database  
C. Installing dependencies  
D. Replacing JSX

### Question 12

Which is the correct way to pass a number as a prop?

A. `<Course duration="12" />`  
B. `<Course duration={12} />`  
C. `<Course {duration=12} />`  
D. `<Course duration:12 />`

### Question 13

What does `map()` commonly do when rendering a list?

A. Starts the development server  
B. Converts CSS to JavaScript  
C. Transforms array items into a new array  
D. Automatically saves data to local storage

### Question 14

Why should React list items have stable keys?

A. To change their text color  
B. To help React identify items between renders  
C. To make every item clickable  
D. To export the component

### Question 15

Which expression displays one of two messages based on a condition?

A. `condition -> "Yes"`  
B. `condition ? "Yes" : "No"`  
C. `condition = "Yes" : "No"`  
D. `condition && "Yes" : "No"`

### Question 16

What does the `children` prop commonly represent?

A. Every child component in the application  
B. Content nested inside a component's opening and closing tags  
C. The component's CSS file  
D. The application's package list

### Question 17

Which statement about props is correct?

A. A child should mutate props whenever it wants  
B. Props are inputs and should be treated as read-only  
C. Props can only contain strings  
D. Props cannot contain arrays

### Question 18

Given `export default Header;`, which import is correct?

A. `import { Header } from "./Header.jsx";`  
B. `import Header from "./Header.jsx";`  
C. `require default Header`  
D. `include Header from "./Header.jsx";`

### Question 19

What does this JSX render if `unreadCount` is `0`?

```jsx
{unreadCount > 0 && <p>Unread messages</p>}
```

A. The number `0`  
B. The text `Unread messages`  
C. Nothing from this expression  
D. An automatic error

### Question 20

What is the main benefit of a reusable `StudentCard` component?

A. Every student needs a separate application  
B. The card layout can be reused without duplicating markup  
C. It eliminates the need for data  
D. It automatically stores data in MongoDB

---

# Section B — Predict the Output

**5 questions × 2 marks = 10 marks**

Write the expected output and briefly explain why.

## Question 21 — Variables in JSX

```jsx
function App() {
  const name = "Diya";

  return <h1>Hello, {name}!</h1>;
}

export default App;
```

What text appears?

## Question 22 — Calculations in JSX

```jsx
function App() {
  const price = 250;
  const quantity = 4;

  return <p>Total: {price * quantity}</p>;
}

export default App;
```

What does the paragraph display?

## Question 23 — Conditional rendering

```jsx
function App() {
  const isAvailable = false;

  return (
    <p>
      {isAvailable ? "Available" : "Not available"}
    </p>
  );
}

export default App;
```

What text appears?

## Question 24 — Rendering arrays

```jsx
function App() {
  const topics = ["JSX", "Props", "Vite"];

  return (
    <ul>
      {topics.map((topic) => (
        <li key={topic}>{topic}</li>
      ))}
    </ul>
  );
}

export default App;
```

How many list items are rendered, and what are their labels?

## Question 25 — Props

```jsx
function Greeting({ name }) {
  return <h2>Welcome, {name}</h2>;
}

function App() {
  return <Greeting name="Kabir" />;
}

export default App;
```

What heading appears?

---

# Section C — Find and Fix the Bugs

**3 questions × 5 marks = 15 marks**

Identify the issue, correct the code, and explain why the correction works.

## Question 26 — Incorrect JSX attributes and structure

```jsx
function App() {
  return (
    <div class="container">
      <h1>React Training</h1>
      <img src="/logo.png" alt="Logo">
    </div>
  );
}

export default App;
```

**Task:** Find and fix the JSX problems.

## Question 27 — Component naming

```jsx
function studentCard() {
  return <h2>Student Profile</h2>;
}

function App() {
  return <studentCard />;
}

export default App;
```

**Task:** Correct the component declaration and its usage.

## Question 28 — Missing list key

```jsx
function App() {
  const students = [
    { id: 1, name: "Aarav" },
    { id: 2, name: "Diya" },
  ];

  return (
    <ul>
      {students.map((student) => (
        <li>{student.name}</li>
      ))}
    </ul>
  );
}

export default App;
```

**Task:** Add an appropriate stable key.

---

# Section D — Independent Coding Exercises

**4 exercises × 5 marks = 20 marks**

Complete these exercises in your own React project.

## Question 29 — Personal Profile Card

Create a reusable `ProfileCard` component.

Required props:

- `name`
- `role`
- `skills`
- `completedCourses`

Requirements:

1. Display the name and role.
2. Render the skills as a list.
3. Display the completed-course count.
4. Provide a default role if none is passed.
5. Render at least two different profiles using the same component.
6. Use stable keys for mapped items.

## Question 30 — Course Catalogue

Create a course catalogue from an array of objects.

Each course must contain:

- `id`
- `title`
- `duration`
- `isOpen`

Requirements:

1. Render courses using `map()`.
2. Use `key={course.id}`.
3. Display the duration.
4. Show `Enrolment Open` or `Enrolment Closed`.
5. Display an appropriate empty-state message if the array is empty.

## Question 31 — Reusable Panel

Create a `Panel` component with a `title` prop and a `children` prop.

Use it in at least two places:

- One panel contains a paragraph.
- Another panel contains a list and a button.

Explain why `children` is useful for this component.

## Question 32 — Component Refactoring

Refactor a page that contains a header, three student cards, and a footer all written inside one `App` component.

Create the following components:

- `Header`
- `StudentCard`
- `StudentList`
- `Footer`
- `App`

Requirements:

1. Keep each component's responsibility clear.
2. Pass student information through props.
3. Render students from an array.
4. Use stable keys.
5. Organize components into separate files where appropriate.
6. Ensure the project still runs after refactoring.

---

# Section E — Practical Assessment

**25 marks — Suggested duration: 30–40 minutes**

## Problem Statement: Internship Learning Dashboard

Build a React application called **Internship Learning Dashboard**.

The application should display a welcome message, a summary section, and a list of learning modules.

## Functional Requirements

1. Create a `Header` component with the title `MERN Stack Internship`.
2. Create a `WelcomePanel` that receives the learner's name through props.
3. Create a reusable `ModuleCard` component.
4. Store at least four learning modules in an array of objects.
5. Each module should have an ID, title, duration, and status.
6. Render the modules using `map()`.
7. Use a stable key for each mapped component.
8. Display different status messages for completed and pending modules.
9. Create a `Footer` component.
10. Use a clean, responsive layout with basic CSS.

## Suggested data structure

You may use the following data shape, but you must write your own implementation.

```jsx
const modules = [
  {
    id: 1,
    title: "React Setup",
    duration: "1 session",
    status: "Completed",
  },
  {
    id: 2,
    title: "JSX",
    duration: "1 session",
    status: "Pending",
  },
  {
    id: 3,
    title: "Components",
    duration: "1 session",
    status: "Pending",
  },
  {
    id: 4,
    title: "Props",
    duration: "1 session",
    status: "Pending",
  },
];
```

## Marking Rubric

| Criteria | Marks |
|---|---:|
| Project runs and JSX is correct | 3 |
| Component structure and composition | 5 |
| Props passed and displayed correctly | 4 |
| Array rendering and stable keys | 4 |
| Conditional rendering | 3 |
| Styling and readability | 3 |
| Independent explanation and debugging | 3 |
| **Total** | **25** |

## Viva Questions

1. Why did you create a separate `ModuleCard` component?
2. How does the parent pass information to a child?
3. What is the purpose of the `key` prop?
4. How does the status message change?
5. What would you change if each module needed a different layout?
6. Why is rendering from an array better than manually writing four cards?
7. Explain how `main.jsx` connects React to `index.html`.

---

# Section F — Group Activities

Work in groups of 3–4 students. Every member should contribute and be able to explain the final implementation.

## Group Task 1 — Student Directory

Build a directory displaying at least six students.

Each card should display:

- Name
- Learning track
- Skills
- Completed tasks

Required components:

- `PageHeader`
- `StudentCard`
- `StudentList`
- `PageFooter`

Requirements:

- Use props.
- Render cards from an array.
- Use stable keys.
- Display an empty state.
- Apply a consistent design.

**Discussion:** Which parts are reusable, and which data should be passed through props?

## Group Task 2 — Course Catalogue

Build a catalogue containing at least five training courses.

Each course should display:

- Title
- Duration
- Level
- Enrolment status

Requirements:

- Use reusable components.
- Use conditional rendering.
- Keep the course data separate from the repeated JSX structure.

**Discussion:** How would you change the implementation if the catalogue contained 100 courses?

## Group Task 3 — Component Tree Diagram

Choose one interface:

- Food delivery page
- E-commerce product listing
- Student learning dashboard
- Employee management dashboard

Draw a component tree and identify the data each child needs from its parent.

Example:

```text
App
├── Header
├── MainContent
│   ├── FilterPanel
│   └── ProductList
│       └── ProductCard
└── Footer
```

Each group should explain its component boundaries and why it chose them.

## Group Task 4 — Code Review

Exchange code with another group.

Review the project using this checklist:

- Are component names capitalized?
- Are props used correctly?
- Are list keys stable?
- Is the JSX valid?
- Are components imported and exported correctly?
- Is duplicated markup unnecessarily repeated?
- Is the code readable?
- Does the project run?

Provide at least two constructive improvement suggestions.

---

# Section G — Short-Answer and Viva Questions

Answer in your own words.

1. What is React, and what problem does it help solve?
2. What is the difference between React and Vite?
3. Explain the purpose of `package.json`.
4. What happens when `npm run dev` is executed?
5. What is JSX, and how does it relate to JavaScript?
6. Why do JSX attributes sometimes use camelCase?
7. Explain the difference between an expression and a statement.
8. What is the difference between a component and an HTML element?
9. What are props?
10. Why should props be treated as read-only?
11. What does component composition mean?
12. What is the `children` prop useful for?
13. Why is `map()` commonly used in React?
14. Why are stable keys important?
15. When should you create a separate component?
16. What is the difference between default and named exports?
17. What is conditional rendering?
18. Why must a React component return valid JSX?
19. How would you investigate a blank React page?
20. Explain the component tree of your practical assessment.

---

# Section H — Answer Key

**Instructor note:** Ask students to complete the assessment before distributing this section. Alternative correct implementations should receive credit.

## Section A — MCQ Answers

| Question | Answer | Explanation |
|---|---|---|
| 1 | B | React is used to build user interfaces. |
| 2 | A | Vite is a development and build tool commonly used to scaffold React apps. |
| 3 | C | `npm install` installs project dependencies. |
| 4 | B | `main.jsx` commonly mounts the app into the root element. |
| 5 | B | JSX is a syntax extension used to describe UI. |
| 6 | B | JSX uses `className` for the CSS class attribute. |
| 7 | C | Curly braces embed JavaScript expressions. |
| 8 | B | A fragment groups sibling elements without adding a DOM wrapper. |
| 9 | A | A component is a reusable UI building block. |
| 10 | C | Component names conventionally begin with a capital letter. |
| 11 | A | Props pass inputs from a parent to a child. |
| 12 | B | Curly braces pass the numeric value `12`. |
| 13 | C | `map()` transforms each array item into a new value. |
| 14 | B | Stable keys help React track items between renders. |
| 15 | B | A ternary chooses between two values. |
| 16 | B | `children` represents content nested inside a component. |
| 17 | B | Props should be treated as read-only inputs. |
| 18 | B | Default exports are imported without braces. |
| 19 | C | The comparison is false, so no message is rendered. |
| 20 | B | Reusable components reduce duplicated UI code. |

## Section B — Expected Outputs

### Question 21

```text
Hello, Diya!
```

The `name` variable is evaluated inside curly braces.

### Question 22

```text
Total: 1000
```

The calculation is `250 × 4`.

### Question 23

```text
Not available
```

The condition is false, so the second ternary branch is selected.

### Question 24

Three list items:

```text
JSX
Props
Vite
```

`map()` produces one `<li>` for each array entry.

### Question 25

```text
Welcome, Kabir
```

The parent passes the string `"Kabir"` to the `name` prop.

## Section C — Example Corrections

### Question 26

```jsx
function App() {
  return (
    <div className="container">
      <h1>React Training</h1>
      <img src="/logo.png" alt="Logo" />
    </div>
  );
}

export default App;
```

Corrections:

- Use `className` instead of `class`.
- Self-close the `img` element.

### Question 27

```jsx
function StudentCard() {
  return <h2>Student Profile</h2>;
}

function App() {
  return <StudentCard />;
}

export default App;
```

Custom component names should be capitalized in their declaration and JSX usage.

### Question 28

```jsx
function App() {
  const students = [
    { id: 1, name: "Aarav" },
    { id: 2, name: "Diya" },
  ];

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}

export default App;
```

The unique student ID is used as the stable key.

## Section D — Example Solutions

### Question 29 — Profile Card

```jsx
function ProfileCard({
  name,
  role = "Learner",
  skills,
  completedCourses,
}) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>Completed courses: {completedCourses}</p>

      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}

export default ProfileCard;
```

Example usage:

```jsx
<ProfileCard
  name="Aarav"
  role="Frontend Intern"
  skills={["HTML", "CSS", "React"]}
  completedCourses={3}
/>

<ProfileCard
  name="Diya"
  skills={["JavaScript", "JSX"]}
  completedCourses={2}
/>
```

### Question 30 — Course Catalogue

```jsx
function CourseCard({ course }) {
  return (
    <article>
      <h2>{course.title}</h2>
      <p>Duration: {course.duration}</p>

      <p>
        {course.isOpen
          ? "Enrolment Open"
          : "Enrolment Closed"}
      </p>
    </article>
  );
}

function CourseList({ courses }) {
  if (courses.length === 0) {
    return <p>No courses are available.</p>;
  }

  return (
    <div>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}

export default CourseList;
```

A complete submission should also provide the course data and render `CourseList` from `App`.

### Question 31 — Panel

```jsx
function Panel({ title, children }) {
  return (
    <section className="panel">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Panel;
```

Example usage:

```jsx
<Panel title="Announcement">
  <p>React training starts today.</p>
</Panel>

<Panel title="Topics">
  <ul>
    <li>JSX</li>
    <li>Components</li>
  </ul>

  <button type="button">Review Topics</button>
</Panel>
```

The `children` prop allows the panel to wrap different content without hardcoding that content into the component.

### Question 32 — Component Refactoring

Accept any implementation that:

- Uses clear component responsibilities.
- Passes student data through props.
- Renders from an array.
- Uses stable keys.
- Imports and exports components correctly.
- Runs successfully.

There is no single required file arrangement as long as the application meets the requirements.

---

# Final Day 1 Submission Checklist

- [ ] Day 1.1 — React introduction and Vite setup completed.
- [ ] Day 1.2 — JSX and JavaScript expressions completed.
- [ ] Day 1.3 — Components, props, and composition completed.
- [ ] Day 1.4 — MCQs, output questions, debugging, coding exercises, and practical assessment attempted.
- [ ] Internship dashboard runs without errors.
- [ ] Student can explain the component tree.
- [ ] Student can pass props and render lists.
- [ ] Student can identify and fix basic JSX errors.
- [ ] Student can explain their own implementation without following a tutorial.


