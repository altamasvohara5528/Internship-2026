// Demonstrate synchronous code, Promise microtasks, and timer tasks.
console.log("1. Start");
setTimeout(() => console.log("4. setTimeout callback (task)"), 0);
Promise.resolve().then(() => console.log("3. Promise callback (microtask)"));
console.log("2. End");

// Expected order:
// 1. Start
// 2. End
// 3. Promise callback (microtask)
// 4. setTimeout callback (task)
