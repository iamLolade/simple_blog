const container = document.querySelector(".details")
const deleteBtn = document.querySelector(".delete")

const id = new URLSearchParams(window.location.search).get("id")
const uri = "http://localhost:3000/posts/";

const renderDetails = async () => {

    const res = await fetch(uri + id);
    const post = await res.json();

    const template = `
        <h1>${post.title}</h1>
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

deleteBtn.addEventListener("click", deletePost)

window.addEventListener("DOMContentLoaded", () => renderDetails())