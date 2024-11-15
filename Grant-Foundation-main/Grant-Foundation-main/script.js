for(let i=1; i<=9; i++){
    let mainBox = document.querySelector(".main-box");

    let container = document.createElement('div')
    container.classList.add('container', `container${i}`)
    container.innerHTML = 
    `
    <div class="img">
        <img>
        <div class="date"></div>
    </div>
    <div class="blog-info">
        <div class="admin">
            <img class="fa-solid fa-user" src= "./images/user.png">
            By: <span></span> 
        </div>
        <div class="comment">
            <img class="fa-solid fa-heart" src= "./images/like.png">
            <span> </span>  &nbsp; | &nbsp;
            <img class="fa-solid fa-comment" src= "./images/comment.png">
            <span> </span> 
        </div>
    </div>
    <div class="blog-text">
        <h3></h3>
        <p></p>
        <a href="">Read More...</a>
    </div>
    ` 

    mainBox.append(container);
}

fetch("https://raw.githubusercontent.com/karan-vaishnav/Grant-Foundation/master/posts.json")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        for (let i = 1; i <= 9; i++) {
            document.querySelector(`.container${i} .blog-text p`).textContent = data[i-1].desc
            document.querySelector(`.container${i} .blog-text h3`).textContent = data[i-1].title
            document.querySelector(`.container${i} .admin span`).textContent = data[i-1].author
            document.querySelector(`.container${i} .comment span:nth-child(2)`).textContent = data[i-1].like_count
            document.querySelector(`.container${i} .comment span:nth-child(4)`).textContent = data[i-1].comment_count
            document.querySelector(`.container${i} .img img`).src = data[i-1].img

            document.querySelector(`.container${i} .date`).textContent = data[i-1].date
        }
    })

