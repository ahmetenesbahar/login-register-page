const login = document.getElementById("login");
const register = document.getElementById("register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

login.addEventListener("click", () => {
  registerForm.classList.add("active");
  login.classList.add("btn-colored");
  register.classList.remove("btn-colored");
  loginForm.classList.remove("active");
});

register.addEventListener("click", () => {
  registerForm.classList.remove("active");
  register.classList.add("btn-colored");
  login.classList.remove("btn-colored");
  loginForm.classList.add("active");
});

// Show / Hide Password

const eyeIcon = document.getElementById("eye-icon");
const secondEyeIcon = document.getElementById("eye-icon-2");
const thirdEyeIcon = document.getElementById("eye-icon-3");
const password = document.getElementById("password");
const secondPassword = document.getElementById("password-2");
const thirdPassword = document.getElementById("password-3");
const passwordConfirm = document.getElementById("password-confirm");

eyeIcon.addEventListener("click", () => {
  const show =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", show);
});

secondEyeIcon.addEventListener("click", () => {
  const show =
    secondPassword.getAttribute("type") === "password" ? "text" : "password";
  secondPassword.setAttribute("type", show);
});

thirdEyeIcon.addEventListener("click", () => {
  const show =
    thirdPassword.getAttribute("type") === "password" ? "text" : "password";
  thirdPassword.setAttribute("type", show);
});

// Local Storage ????
