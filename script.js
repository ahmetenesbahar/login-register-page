const login = document.getElementById("login");
const register = document.getElementById("register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

login.addEventListener("click", () => {
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
});

register.addEventListener("click", () => {
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
});

// Show / Hide Password

const eyeIcon = document.getElementById("eye-icon");
const secondEyeIcon = document.getElementById("eye-icon-2");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

eyeIcon.addEventListener("click", () => {
  const show =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", show);
});

eyeIcon.addEventListener("click", () => {
  const show =
    passwordConfirm.getAttribute("type") === "password" ? "text" : "password";
  passwordConfirm.setAttribute("type", show);
});
