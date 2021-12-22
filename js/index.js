//Container
const container = document.querySelector(".blogs")

//Render posts
const renderPosts = async () => {
    let uri = "http://localhost:3000/posts";

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
                <a href="/details.html">Read more...</a>
            </div>
        `
    });

    container.innerHTML = template;
}





window.addEventListener("DOMContentLoaded", () => renderPosts());