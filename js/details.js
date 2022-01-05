const container = document.querySelector(".details");
const deleteBtn = document.querySelector(".delete");
//const likeBtn = document.querySelector(".like");

const id = new URLSearchParams(window.location.search).get("id")
//const likeCount = new URLSearchParams(window.location.search).get("likes")

const uri = "http://localhost:3000/posts/";

const renderDetails = async () => {

    const res = await fetch(uri + id);
    const post = await res.json();

    const template = `
        <h1>${post.title}</h1>
        <br>
        <p>${post.body}</p>
    `;

    container.innerHTML = template

}

const deletePost = async(e) => {
    await fetch(uri + id, {
        method: "DELETE"
    })

    window.location.replace("/index.html")
}

// likeBtn.addEventListener("click", () => {
//     likeCount++;
// })

deleteBtn.addEventListener("click", deletePost)

window.addEventListener("DOMContentLoaded", () => renderDetails())