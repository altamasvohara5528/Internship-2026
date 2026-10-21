// Fetch independent API endpoints concurrently with Promise.all().
async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status} for ${url}`);
  }
  return response.json();
}

async function loadUsersAndPosts() {
  try {
    const [users, posts] = await Promise.all([
      fetchJson("https://jsonplaceholder.typicode.com/users"),
      fetchJson("https://jsonplaceholder.typicode.com/posts")
    ]);
    console.log("Users:", users.length);
    console.log("Posts:", posts.length);
    console.log("First user:", users[0]?.name ?? "No users returned");
  } catch (error) {
    console.error("Failed to load API data:", error.message);
  }
}
loadUsersAndPosts();
