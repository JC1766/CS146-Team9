window.addEventListener('load', function () {
  /**
   * on comment form submit
   */
  commentForm.addEventListener('submit', function (e) {
    // prevent page from reload
    e.preventDefault();
    // get form values
    var name = commentForm.name.value;
    var email = commentForm.email.value;
    var comment = commentForm.comment.value;

    var contentEl = document.querySelector('#comments');

    // create comment element
    var commentEl = document.createElement('p');
    commentEl.textContent = name + '<' + email + '>: ' + comment;

    // append new comment to its container
    contentEl.appendChild(commentEl);

  })
})
