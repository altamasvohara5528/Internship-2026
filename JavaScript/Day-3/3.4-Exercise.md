# Day 3 — JavaScript Practice Workbook

**Topics:** Objects, nested objects, destructuring, spread/rest, immutability, and object methods.


## Section A — MCQs (20 Marks)

*Choose one correct answer for each question. Each question carries 2 marks.*

1. Which syntax accesses the `name` property of an object?
   - A. `user->name`
   - B. `user.name`
   - C. `user::name`
   - D. `user#name`

2. What does `?.` represent?
   - A. Spread operator
   - B. Optional chaining
   - C. Rest parameter
   - D. Destructuring

3. What does `Object.keys(obj)` return?
   - A. Property values
   - B. Key-value pairs
   - C. An array of property names
   - D. A copied object

4. What does `{ ...user }` generally create?
   - A. A deep copy
   - B. A shallow copy
   - C. A frozen object
   - D. A string

5. Which syntax collects remaining function arguments into an array?
   - A. `...args`
   - B. `&args`
   - C. `**args`
   - D. `args...`

6. Which statement about a `const` object is correct?
   - A. Its properties can never change.
   - B. Its variable can always be reassigned.
   - C. Its properties can change, but the variable cannot be reassigned.
   - D. It cannot contain nested objects.

7. What does `Object.values(obj)` return?
   - A. Property values
   - B. Property names
   - C. Only numeric values
   - D. A Boolean

8. Which syntax renames a property during destructuring?
   - A. `{ name = studentName }`
   - B. `{ name: studentName }`
   - C. `{ studentName: name }`
   - D. `{ name -> studentName }`

9. What happens when two variables reference the same object?
   - A. They always contain separate copies.
   - B. Changes through one reference may be visible through the other.
   - C. The object becomes immutable.
   - D. JavaScript throws an error.

10. Which approach is preferred for updating React state objects?
    - A. Mutate the existing state directly.
    - B. Create an updated object.
    - C. Delete the state variable.
    - D. Convert every object to a string.

## Section B — Predict the Output (15 Marks)

*Each question carries 3 marks. Write the exact output and explain why.*

### Q1
```javascript
const user = { name: "Amit", age: 20 };
const { name } = user;

console.log(name);
```

### Q2
```javascript
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);

console.log(original.length);
console.log(copy.length);
```

### Q3
```javascript
const user = { name: "Riya", city: "Anand" };
const updated = { ...user, city: "Surat" };

console.log(user.city);
console.log(updated.city);
```

### Q4
```javascript
const [first, ...remaining] = [5, 10, 15, 20];

console.log(first);
console.log(remaining);
```

### Q5
```javascript
const product = {
  name: "Laptop",
  details: { color: "Silver" }
};

const copy = { ...product };
copy.details.color = "Black";

console.log(product.details.color);
```

## Section C — Debugging (15 Marks)

*Each question carries 5 marks. Identify the issue and correct the code.*

### Q1
```javascript
const user = { name: "Asha" };
console.log(user.address.city);
```

### Q2
```javascript
const numbers = [1, 2, 3];
const copy = numbers;

copy.push(4);

console.log(numbers);
```

The code runs, but the developer expected `numbers` to remain unchanged. Fix it.

### Q3
```javascript
const student = { name: "Jay", marks: 70 };

const updatedStudent = {
  ...student,
  marks: student.marks
};

updatedStudent.marks = 90;

console.log(student.marks);
```

Rewrite the code so the student's original marks remain unchanged and the updated value is 90.

## Section D — Coding Exercises (20 Marks)

*Each question carries 5 marks.*

1. Create an object representing a course with `title`, `duration`, and `price`. Add a `level` property and update the price.

2. Use destructuring to extract `name` and `email` from a user object. Give `city` a default value of `"Anand"`.

3. Write a function called `sumAll()` that accepts any number of numeric arguments and returns their sum using rest parameters.

4. Given an object containing `name`, `age`, and `role`, create a new object with an updated role without modifying the original.

## Section E — Mini Project: Student Record Manager (20 Marks)

Create a small JavaScript program to manage student records.

### Requirements

1. Create at least three student objects containing `id`, `name`, `marks`, and `address`.
2. Store all students in an array.
3. Display each student's name and city.
4. Use `filter()` to create a new array of students who scored at least 70 marks.
5. Use `map()` to create a new array with updated marks for a selected student.
6. Use destructuring to extract a student's name and marks.
7. Ensure the original array and student objects are not directly mutated when performing updates.

**Submission:** A JavaScript file with working code and comments explaining the immutable update.

## Section F — Viva Questions (10 Marks)

*Each question carries 2 marks.*

1. What is the difference between an object and an array?
2. Explain the difference between spread and rest.
3. What is a shallow copy?
4. Why should we avoid directly mutating React state?
5. How can you safely access a possibly missing nested property?

---

# Instructor Answer Key

## Section A — MCQs

1. B
2. B
3. C
4. B
5. A
6. C
7. A
8. B
9. B
10. B

## Section B — Expected Output

**Q1**
```text
Amit
```

**Q2**
```text
3
4
```

**Q3**
```text
Anand
Surat
```

**Q4**
```text
5
[10, 15, 20]
```

**Q5**
```text
Black
```

Explanation: The spread operation copies only the top-level object. The nested `details` object is shared between `product` and `copy`.

## Section C — Suggested Corrections

**Q1**
```javascript
console.log(user.address?.city);
```
This safely handles a missing `address` property.

**Q2**
```javascript
const numbers = [1, 2, 3];
const copy = [...numbers];

copy.push(4);

console.log(numbers); // [1, 2, 3]
```

**Q3**
The original code already keeps the top-level `marks` value unchanged. A clearer version is:

```javascript
const student = { name: "Jay", marks: 70 };
const updatedStudent = { ...student, marks: 90 };

console.log(student.marks);        // 70
console.log(updatedStudent.marks); // 90
```

## Section D — Evaluation Guide

Award marks for correct syntax, correct output, meaningful variable names, and preserving original data where required.

## Section E — Evaluation Guide

- Student objects and array structure: 4 marks
- Correct property access and destructuring: 4 marks
- Correct `filter()` and `map()` usage: 6 marks
- Immutable update: 4 marks
- Readable code and explanation: 2 marks

## Section F — Expected Concepts

Students should explain object/array structures, spread versus rest, shallow copies, immutable state updates, and optional chaining using their own examples.
