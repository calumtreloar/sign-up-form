const btn = document.querySelector(".btn");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("password_check");

btn.addEventListener("click", (e) => {
  const errorLog = document.querySelector(".error-log");

  if (password.value != passwordCheck.value) {
    e.preventDefault();
    errorLog.textContent = "*Passwords do not match";
  }
});

password.addEventListener("keyup", validatePassword);
passwordCheck.addEventListener("keyup", validatePassword);

function validatePassword() {
  if (password.value != passwordCheck.value) {
    password.setCustomValidity("Passwords don't match");
    passwordCheck.setCustomValidity("Passwords don't match");
  } else {
    password.setCustomValidity("");
    passwordCheck.setCustomValidity("");
  }
}
