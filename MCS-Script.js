const userName = document.getElementById("username-input");
const userComment = document.getElementById("user-comment-textarea");
const commentsArea = document.getElementById("comments-area");

const confirmButton = document.getElementById("confirm-button");

confirmButton.addEventListener("click", addComment);

function addComment()
{
  if (userName.value != "" && userComment.value != "") 
  {
    console.log(userName.value);
  console.log(userComment.value);
  
  const commentContainer = document.createElement("section");
  
  const usernameForComment = document.createElement("p");
  
  usernameForComment.textContent = "@" + userName.value;
  
  commentContainer.appendChild(usernameForComment);
  
  const newComment = document.createElement("p");
  
  newComment.textContent = userComment.value;
  
  commentContainer.appendChild(newComment);
  
  document.body.appendChild(commentContainer);
  
  userName.value = "";
  userComment.value = "";
  }
 }