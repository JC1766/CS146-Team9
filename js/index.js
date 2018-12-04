window.addEventListener('load', function () {
  /**
   * on login form submit
   */
  loginForm.addEventListener('submit', function (e) {
    // prevent page from reload
    e.preventDefault();
    // get form values
    var name = loginForm.name.value;
    var email = loginForm.email.value;
    var password = loginForm.password.value;

    var welcomeEl = document.getElementById('welcome');
    // clear contents of welcome element
    welcomeEl.innerHTML = '';
    // create h1
    var h1 = document.createElement('h1');
    h1.textContent = 'Welcome, ' + name + '<' + email + '>';
    // append h1 to welcome element
    welcomeEl.appendChild(h1);
  })
})
