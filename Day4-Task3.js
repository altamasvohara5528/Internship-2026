// Promise chaining and async/await with error handling.
function getNumber() {
  return new Promise((resolve) => setTimeout(() => resolve(10), 300));
}

getNumber()
  .then((number) => number * 2)
  .then((result) => console.log("Promise chain result:", result))
  .catch((error) => console.error("Promise error:", error.message));

async function showAsyncResult() {
  try {
    const number = await getNumber();
    console.log("Async/await result:", number * 3);
  } catch (error) {
    console.error("Async error:", error.message);
  }
}

async function demonstrateErrorHandling() {
  try {
    throw new Error("This is an example error.");
  } catch (error) {
    console.log("Handled error:", error.message);
  } finally {
    console.log("Finally block always runs.");
  }
}

showAsyncResult();
demonstrateErrorHandling();
