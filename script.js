const login = document.getElementById("login");
const register = document.getElementById("register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const loginSubmit = document.getElementById("loginSubmit");
const registerSubmit = document.getElementById("registerSubmit");
const signupText = document.getElementById("signupText");
const loginText = document.getElementById("loginText");

signupText.addEventListener("click", () => {
  registerForm.classList.remove("active");
  register.classList.add("btn-colored");
  login.classList.remove("btn-colored");
  loginForm.classList.add("active");
});

loginText.addEventListener("click", () => {
  registerForm.classList.add("active");
  login.classList.add("btn-colored");
  register.classList.remove("btn-colored");
  loginForm.classList.remove("active");
});

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
const eyeOpen = document.getElementById("eyeOpen");
const secondeyeOpen = document.getElementById("secondeyeOpen");
const thirdeyeOpen = document.getElementById("thirdeyeOpen");
const eyeClose = document.getElementById("eyeClose");
const secondeyeClose = document.getElementById("secondeyeClose");
const thirdeyeClose = document.getElementById("thirdeyeClose");
const password = document.getElementById("password");
const secondPassword = document.getElementById("password2");
const thirdPassword = document.getElementById("password-3");
const passwordConfirm = document.getElementById("password-confirm");

eyeIcon.addEventListener("click", () => {
  const show =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", show);

  if (eyeOpen.classList.contains("active")) {
    eyeOpen.classList.remove("active");
    eyeClose.classList.add("active");
  } else {
    eyeOpen.classList.add("active");
    eyeClose.classList.remove("active");
  }
});

secondEyeIcon.addEventListener("click", () => {
  const show =
    secondPassword.getAttribute("type") === "password" ? "text" : "password";
  secondPassword.setAttribute("type", show);

  if (secondeyeOpen.classList.contains("active")) {
    secondeyeOpen.classList.remove("active");
    secondeyeClose.classList.add("active");
  } else {
    secondeyeOpen.classList.add("active");
    secondeyeClose.classList.remove("active");
  }
});

thirdEyeIcon.addEventListener("click", () => {
  const show =
    thirdPassword.getAttribute("type") === "password" ? "text" : "password";
  thirdPassword.setAttribute("type", show);

  if (thirdeyeOpen.classList.contains("active")) {
    thirdeyeOpen.classList.remove("active");
    thirdeyeClose.classList.add("active");
  } else {
    thirdeyeOpen.classList.add("active");
    thirdeyeClose.classList.remove("active");
  }
});

// Local Storage ????
const loginPassword = document.getElementById("password");
const loginEmail = document.getElementById("loginEmail");
const registerEmail = document.getElementById("registerEmail");
const registerUsername = document.getElementById("registerUsername");
const checkbox = document.getElementById("checkbox");

loginSubmit.addEventListener("click", () => {
  if (checkbox.checked == true) {
    const loginPassword = document.getElementById("password");
    const loginEmail = document.getElementById("loginEmail");
    const loginObject = {
      email: loginEmail.value || "",
      password: loginPassword.value || "",
    };
    localStorage.setItem("loginForm", JSON.stringify(loginObject));
  }
});

registerSubmit.addEventListener("click", () => {
  const registerPassword = document.getElementById("password2");
  const registerUsername = document.getElementById("registerUsername");
  const registerEmail = document.getElementById("registerEmail");
  const registerObject = {
    username: registerUsername.value || "",
    email: registerEmail.value || "",
    password: registerPassword.value || "",
  };
  localStorage.setItem("registerForm", JSON.stringify(registerObject));
});

const getFromLocalStorage = () => {
  const loginObject = JSON.parse(localStorage.getItem("loginForm"));
  loginEmail.value = loginObject.email;
  loginPassword.value = loginObject.password;

  const registerObject = JSON.parse(localStorage.getItem("registerForm"));
  registerEmail.value = registerObject.email;
  registerUsername.value = registerObject.username;
  secondPassword.value = registerObject.password;
};
getFromLocalStorage();
