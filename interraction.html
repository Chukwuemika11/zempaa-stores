<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elevate Your Style: The Ultimate Guide to Gowns</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        .blog-container {
            display: flex;
            margin: 20px;
            border: 1px solid #ccc;
            padding: 10px;
        }

        .blog-container img {
            max-width: 150px;
            margin-right: 10px;
        }

        .content {
            flex-grow: 1;
        }

        .actions {
            display: flex;
            gap: 10px;
            margin-top: 10px;
        }

        .comment-section {
            margin-top: 20px;
        }

        .comment-form {
            margin-top: 10px;
        }

        .comment {
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
            margin-bottom: 10px;
        }

        .fa {
            font-size: 24px;
            cursor: pointer;
        }

        .fa:hover {
            color: #ff4500; /* Change color on hover (optional) */
        }

        .likes-dislikes {
            margin-top: 10px;
        }
    </style>
</head>
<body>

<div class="blog-container">
    <img src="./img/shirt12.jpeg" alt="Blog Image 1">
    <div class="content">
        <h1>Elevate Your Style: The Ultimate Guide to Gowns</h1>
        <p>
            Welcome to our exclusive guide on embracing elegance and glamour with the perfect gown! At LawPasChris, we understand that the right gown can transform an ordinary moment into a timeless memory.
            <span class="read-more">Continue reading...</span>
            <span class="hidden-text">Whether you're attending a special occasion, walking down the aisle, or simply indulging in the joy of fashion, we have the gown that suits every style and occasion.</span>
        </p>

        <div class="actions">
            <i class="far fa-thumbs-up like-btn" onclick="toggleLike()"></i>
            <i class="far fa-thumbs-down dislike-btn" onclick="toggleDislike()"></i>
            <i class="far fa-comment comment-btn" onclick="toggleCommentForm()"></i>
        </div>

        <div class="comment-section">
            <h3>Comments</h3>
            <div id="comments"></div>
            <div id="likes-dislikes" class="likes-dislikes"></div>
        </div>

        <div class="comment-form" style="display: none;">
            <h3>Add a Comment</h3>
            <form id="commentForm">
                <textarea id="commentInput" placeholder="Write your comment here..." rows="4" cols="50"></textarea><br>
                <input type="button" value="Submit Comment" onclick="submitComment()">
            </form>
        </div>
    </div>
</div>

<script>
    const blogKey = 'blog-1';
    let userActions = JSON.parse(localStorage.getItem(blogKey)) || { like: false, dislike: false, comments: [] };

    function toggleLike() {
        if (!userActions.dislike) {
            userActions.like = !userActions.like;
            updateLocalStorage();
            updateButtons();
        }
    }

    function toggleDislike() {
        if (!userActions.like) {
            userActions.dislike = !userActions.dislike;
            updateLocalStorage();
            updateButtons();
        }
    }

    function toggleCommentForm() {
        const commentForm = document.querySelector('.comment-form');
        commentForm.style.display = commentForm.style.display === 'none' ? 'block' : 'none';
    }

    function submitComment() {
        const commentInput = document.getElementById('commentInput').value;
        if (commentInput) {
            const comment = {
                text: commentInput,
                replies: []
            };
            userActions.comments.push(comment);
            updateLocalStorage();
            displayComments();
            document.getElementById('commentForm').reset();
        }
    }

    function updateButtons() {
        const likeBtn = document.querySelector('.like-btn');
        const dislikeBtn = document.querySelector('.dislike-btn');

        likeBtn.style.color = userActions.like ? '#ff4500' : '';
        dislikeBtn.style.color = userActions.dislike ? '#ff4500' : '';

        likeBtn.onclick = userActions.like ? null : toggleLike;
        dislikeBtn.onclick = userActions.dislike ? null : toggleDislike;

        updateLikesDislikes();
    }

    function updateLocalStorage() {
        localStorage.setItem(blogKey, JSON.stringify(userActions));
    }

    function displayComments() {
        const commentsContainer = document.getElementById('comments');
        commentsContainer.innerHTML = '';

        userActions.comments.forEach((comment, index) => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');

            const commentText = document.createElement('p');
            commentText.textContent = comment.text;

            const replyBtn = document.createElement('button');
            replyBtn.textContent = 'Reply';
            replyBtn.onclick = () => replyToComment(index);

            commentDiv.appendChild(commentText);
            commentDiv.appendChild(replyBtn);

            if (comment.replies.length > 0) {
                const repliesContainer = document.createElement('div');
                repliesContainer.classList.add('replies');

                comment.replies.forEach(reply => {
                    const replyText = document.createElement('p');
                    replyText.textContent = `Reply: ${reply.text}`;
                    repliesContainer.appendChild(replyText);
                });

                commentDiv.appendChild(repliesContainer);
            }

            commentsContainer.appendChild(commentDiv);
        });

        updateLikesDislikes();
    }

    function replyToComment(commentIndex) {
        const replyInput = prompt('Enter your reply:');
        if (replyInput) {
            const reply = {
                text: replyInput
            };
            userActions.comments[commentIndex].replies.push(reply);
            updateLocalStorage();
            displayComments();
        }
    }

    function updateLikesDislikes() {
        const likesDislikesContainer = document.getElementById('likes-dislikes');
        const likes = userActions.like ? 1 : 0;
        const dislikes = userActions.dislike ? 1 : 0;
        const totalComments = userActions.comments.length;

        likesDislikesContainer.innerHTML = `Likes: ${likes} | Dislikes: ${dislikes} | Comments: ${totalComments}`;
    }

    // Initial update of buttons, comments, and likes/dislikes based on user's previous actions
    updateButtons();
    displayComments();
    updateLikesDislikes();
</script>

</body>
</html>
