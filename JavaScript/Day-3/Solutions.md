# Day 3 — Objects, Destructuring and Immutability: Solutions

## Section A — MCQs
1. B  2. B  3. C  4. B  5. A
6. C  7. A  8. B  9. B  10. B

## Section B — Predict the Output
Q1: `Amit`  
Q2: `3`, then `4`  
Q3: `Anand`, then `Surat`  
Q4: `5`, then `[10, 15, 20]`  
Q5: `Black` — spread made a shallow copy, so the nested details object is shared.

## Section C — Debugging
### Q1. Safe nested access
```javascript
const user = { name: "Asha" };
console.log(user.address?.city); // undefined
```
Optional chaining prevents an error when address is missing. If the whole user may be missing, use `user?.address?.city`.

### Q2. Copy the array
```javascript
const numbers = [1, 2, 3];
const copy = [...numbers];
copy.push(4);
console.log(numbers); // [1, 2, 3]
console.log(copy);    // [1, 2, 3, 4]
```

### Q3. Immutable student update
```javascript
const student = { name: "Jay", marks: 70 };
const updatedStudent = { ...student, marks: 90 };
console.log(student.marks);        // 70
console.log(updatedStudent.marks); // 90
```

## Section D — Coding Exercises
### Q1. Course object
```javascript
const course = {
  title: "JavaScript",
  duration: "5 weeks",
  price: 5000
};
course.level = "Beginner";
course.price = 4500;
console.log(course);
```

### Q2. Destructuring with default city
```javascript
const user = {
  name: "Asha",
  email: "asha@example.com"
};
const { name, email, city = "Anand" } = user;
console.log(name, email, city);
```

### Q3. Rest parameter sum
```javascript
function sumAll(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10
console.log(sumAll());          // 0
```

### Q4. Immutable role update
```javascript
const employee = { name: "Ravi", age: 25, role: "Developer" };
const updatedEmployee = { ...employee, role: "Team Lead" };
console.log(employee.role);        // Developer
console.log(updatedEmployee.role); // Team Lead
```

## Section E — Mini Project: Student Record Manager
```javascript
const students = [
  { id: 1, name: "Asha", marks: 82, address: { city: "Anand" } },
  { id: 2, name: "Ravi", marks: 65, address: { city: "Vadodara" } },
  { id: 3, name: "Neha", marks: 91, address: { city: "Surat" } }
];

// Display names and cities.
students.forEach(({ name, address }) => {
  console.log(name, address.city);
});

// A new array containing students with at least 70 marks.
const highScorers = students.filter(student => student.marks >= 70);

// Increase marks for student ID 2 without mutating the original array.
const updatedStudents = students.map(student =>
  student.id === 2
    ? { ...student, marks: student.marks + 10 }
    : student
);

// Destructure a selected student's name and marks.
const selected = students.find(student => student.id === 1);
const { name, marks } = selected;
console.log("Selected:", name, marks);
console.log("High scorers:", highScorers);
console.log("Updated list:", updatedStudents);
console.log("Original list remains:", students);
```
Note: the sample's nested address objects are read only. If changing a nested property in a copy, also copy the nested object: `{ ...student, address: { ...student.address, city: "..." } }`.

## Section F — Viva: Short Answers
1. An object stores named properties; an array stores an ordered list of values indexed by position.
2. Spread expands values from an iterable/object; rest collects remaining values into an array or object.
3. A shallow copy duplicates only the top level; nested objects remain shared references.
4. Direct mutation can make state changes difficult for React to detect and can cause unpredictable UI updates. Create new objects instead.
5. Use optional chaining, for example `user?.address?.city`.
