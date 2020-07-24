let btn = document.querySelector('button');

function nav_tab(){
  const login_nav = document.querySelector('nav');
  login_nav.textContent = 'Login';
  const reset_nav = document.querySelector('nav');
  reset_nav.textContent = 'Reset';
  const signup_nav = document.querySelector('nav');
  signup_nav.textContent = 'Sign up';
  const home_nav = document.querySelector('nav');
  home_nav.textContent = 'Home';
}

btn.onclick = function(){
  nav_tab();
}



function resetFunction(){
    alert("Your account'd been reset. Please try logging in again.");
}

function signupFunction(){
    alert("Your account'd been created. Please check your email to complete the process.");
}
function loginFunction(){
    alert("The User ID & Password do not match. Please try again.");
}
