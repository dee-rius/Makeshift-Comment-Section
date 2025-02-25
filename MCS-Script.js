const userName = document.getElementById("username-input");
const userComment = document.getElementById("user-comment-textarea");

const confirmButton = document.getElementById("confirm-button");

const everythingContainer = document.getElementById("everything-container");

confirmButton.addEventListener("click", addComment);


const maxCommentWidth = document.querySelector("fieldset").clientWidth;
console.log(maxCommentWidth);

function addComment()
{
  if (userName.value != "" && userComment.value != "") 
  {
    console.log(userName.value);
    console.log(userComment.value);
  
    const commentContainer = document.createElement("article");
  
    const usernameForComment = document.createElement("p");
  
    usernameForComment.textContent = "@" + userName.value;
  
    commentContainer.appendChild(usernameForComment);
  
    const newComment = document.createElement("p");
  
    newComment.textContent = userComment.value;
  
    commentContainer.appendChild(newComment);
  
    everythingContainer.appendChild(commentContainer);
  
    userName.value = "";
    userComment.value = "";
    
    newComment.style.maxWidth = String(maxCommentWidth) + "px";
    usernameForComment.style.maxWidth = String(maxCommentWidth) + "px";
    console.log(newComment.style.maxWidth);
  }
 }