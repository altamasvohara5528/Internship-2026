// Fetch two independent resources concurrently with Promise.all().
async function fetchJson(url) {
  const response = await fetch(url);
  // fetch() rejects automatically for network errors, not HTTP 404/500 statuses.
  if (!response.ok) throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  return response.json();
}

async function main() {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";
  const postsUrl = "https://jsonplaceholder.typicode.com/posts";
  try {
    const [users, posts] = await Promise.all([fetchJson(usersUrl), fetchJson(postsUrl)]);
    console.log("Users fetched:", users.length);
    console.log("Posts fetched:", posts.length);
    console.log("First user:", users[0].name);
    console.log("First post title:", posts[0].title);
  } catch (error) {
    console.error("Could not fetch API data:", error.message);
  }
}
main();
