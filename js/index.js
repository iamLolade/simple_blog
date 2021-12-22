//Container
const container = document.querySelector(".blogs")
const searchForm = document.querySelector(".search")

//Render posts
const renderPosts = async (term) => {
    let uri = "http://localhost:3000/posts?_sort=likes&_order=desc";

    if(term) {
        uri += `&q=${term}`
    }
    const res = await fetch(uri);
    const posts = await res.json();

    console.log(posts)

    let template = "";
    posts.forEach(post => {
        template += `
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.likes} ❤️</small></p>
                <p>${post.body.slice(0, 200)}</p>
                <br>
                <a href="/details.html?id=${post.id}">Read more...</a>
            </div>
        `
    });

    container.innerHTML = template;
}

const searchPost = (e) => {
    e.preventDefault()

    renderPosts(searchForm.term.value.trim())
}

searchForm.addEventListener("submit", searchPost)

window.addEventListener("DOMContentLoaded", () => renderPosts());