const container = document.querySelector(".details")

const id = new URLSearchParams(window.location.search).get("id")

const renderDetails = async () => {
    let uri = "http://localhost:3000/posts/";

    const res = await fetch(uri + id);
    const post = await res.json();

    const template = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
    `;

    container.innerHTML = template


}



window.addEventListener("DOMContentLoaded", () => renderDetails())