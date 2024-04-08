// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const pauseBtn = document.getElementById('pause');
    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    const likeBtn = document.getElementById('heart');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('list');
    const counterDiv = document.getElementById('counter');
    const likeCountDiv = document.getElementsByClassName('likes');
    
    let likes = 0;
    let interval= 1000;
    let counter = 0;
    let Paused = false;

 setInterval(() => {
        if (!Paused) {
            counter++; // Increment the count only if not paused
            counterDiv.textContent = counter; // Update the text content of the h1 element
        }
    }, interval);

    //  To Increment counter manually
    plusBtn.addEventListener('click', function() {
        counter++;
        counterDiv.textContent = counter;
    });

    //To Decrement counter manually
    minusBtn.addEventListener('click', function() {
        counter--;
        counterDiv.textContent = counter;
    });


    // Pause or resume counter
pauseBtn.addEventListener('click', function() {
    if (pauseBtn.textContent === 'pause') {
        Paused = true;
        pauseBtn.textContent = 'Resume';
        plusBtn.disabled = true;
        minusBtn.disabled = true;
        likeBtn.disabled = true;
    } else {
        pauseBtn.textContent = 'pause';
        Paused = false;
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        likeBtn.disabled = false;
    }
});

heart.addEventListener("click", function() {
    let counter = document.getElementById("counter");
    let currentValue = parseInt(counter.innerText);
    let likes = document.querySelector(".likes");
    let existingLike = Array.from(likes.children).find(child => parseInt(child.dataset.num) === currentValue);

    if (existingLike) {
        let likeCount = parseInt(existingLike.children[0].innerText);
        existingLike.innerHTML = currentValue + " has been liked <span>" + (likeCount + 1) + "</span> times";
    } else {
        let newLike = document.createElement("li");
        newLike.setAttribute("data-num", currentValue);
        newLike.innerHTML = currentValue + " has been liked <span>1</span> time";
        likes.appendChild(newLike);
    }
});



    // Leave comment
    commentForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let commentInput = this.children[0];
        let commentText = commentInput.value;
        commentInput.value = "";
    
        let commentsDiv = document.querySelector(".comments");
        let newComment = document.createElement("li");
        newComment.innerText = commentText;
        commentsDiv.appendChild(newComment);
    });
 });