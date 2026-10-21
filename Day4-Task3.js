// Promises, async/await, chaining, and error handling.
function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task completed"), 1000);
  });
}

function demonstratePromiseChaining() {
  return Promise.resolve(4)
    .then((value) => value * 2)
    .then((value) => value + 3)
    .then((value) => {
      console.log("Chained result:", value); // 11
      return value;
    })
    .catch((error) => {
      console.error("Promise chain failed:", error.message);
    });
}

async function displayMessage() {
  try {
    const message = await getMessage();
    console.log(message);
  } catch (error) {
    console.error("Unable to complete task:", error.message);
  } finally {
    console.log("Task operation finished.");
  }
}

async function main() {
  await demonstratePromiseChaining();
  await displayMessage();
}
main();
