// Call stack demonstration.
function first() {
  console.log("Inside first()");
  second();
  console.log("Leaving first()");
}
function second() {
  console.log("Inside second()");
}

console.log("=== Call stack ===");
first();

console.log("\n=== Event loop order ===");
console.log("Start");
setTimeout(() => console.log("Timer task"), 0);
Promise.resolve().then(() => console.log("Promise microtask"));
queueMicrotask(() => console.log("queueMicrotask callback"));
console.log("End");

// Event-loop output:
// Start
// End
// Promise microtask
// queueMicrotask callback
// Timer task
