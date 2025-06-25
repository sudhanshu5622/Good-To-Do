let loginForm = document.getElementById("loginForm");
let signupForm = document.getElementById("signupForm");
let btn = document.getElementById("btn");

function signup() {
  loginForm.style.left = "-400px";
  signupForm.style.left = "50px";
  btn.style.left = "110px";
}

function login() {
  loginForm.style.left = "50px";
  signupForm.style.left = "450px";
  btn.style.left = "0";
}

// Optional: Add form submit behavior
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Login Successful!");
});

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Signup Successful!");
});
