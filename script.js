const BASE_URL = "https://jsonplaceholder.typicode.com";
const loadUsersBtn = document.getElementById("loadUsersBtn");

loadUsersBtn.addEventListener("click", async () => {
    const users = await fetchUsers();
    displayUsers(users);
});

loadPostsBtn.addEventListener('click', async()=>{
    const posts = await fetchPosts();
    displayPosts(posts);
})

async function fetchUsers() {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        const users = response.json();
        // console.log(users);
        return users;
    } catch (error) {
        console.log(`Error fetching users: ${error}`);
    }
}

function displayUsers(users) {
    usersList.innerHTML = "";
    users.forEach(({ name, phone }) => {
        const li = document.createElement("li");
        const phoneFormatted = phone.split(" ")[0];
        li.textContent = name + "   " + phoneFormatted;
        usersList.appendChild(li);
    });
}

async function fetchPosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const posts = response.json();
        return posts;
    } catch (error) {
        console.log(`Error fetching posts: ${error}`);
    }
}

function displayPosts(posts) {
    postsList.innerHTML = "";
    posts.forEach((post) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.body}</p>
        `
        postsList.appendChild(li)
    });
}
