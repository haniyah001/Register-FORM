"use strict";

const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const phoneNumInput = document.querySelector(".phoneNum");
const passwordInput = document.querySelector(".password");
const confirmPasswordInput = document.querySelector(".confirmPassword");
const signUpPage = document.querySelector(".whole_div");
const showModal = document.querySelector(".modal_div");
const homePage = document.querySelector(".home_page");

const subForm = document.querySelector(".subForm");
const showMark = document.querySelector(".verify_mark");
const showOverlay = document.querySelector(".overlay");
const showSuccess = document.querySelector(".verify_success");
const showVerify = document.querySelector(".verify-input");
const form = document.querySelector(".form");
nameInput.focus();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  validateInput();
});

const setError = function (element, message) {
  const inputControl = element.parentElement;
  const displayError = inputControl.querySelector(".error");

  displayError.textContent = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const displayError = inputControl.querySelector(".error");

  displayError.textContent = " ";
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
};

const validateInput = function () {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phoneNum = phoneNumInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  const newError = [];

  if (!name) {
    setError(nameInput, "Username is Required");
    nameInput.focus();
    newError.name = "Username is Required";
    return;
  } else {
    setSuccess(nameInput);
    // nameInput.value = "";
  }
  if (!email) {
    setError(emailInput, "Email is Required");
    emailInput.focus();
    newError.email = "Email is Required";
    return;
  } else {
    setSuccess(emailInput);
    // emailInput.value = "";
  }
  if (!phoneNum) {
    setError(phoneNumInput, "PhoneNumber is Required");
    phoneNumInput.focus();
    newError.phoneNum = "PhoneNumber is Required";
    return;
  } else if (phoneNum.length < 11) {
    setError(phoneNumInput, "Your phone number must be up to 11 digits");
    phoneNumInput.focus();
    newError.phoneNum = "Your phone number must be up to 11 digits";
    return;
  } else {
    setSuccess(phoneNumInput);
    // phoneNumInput.value = "";
  }
  if (!password) {
    setError(passwordInput, "Password is Required");
    passwordInput.focus();
    newError.password = "password is Required";
    return;
  } else if (password.length < 8) {
    setError(passwordInput, "Your password must be at least 8 character");
    passwordInput.focus();
    newError.password = "Your password must be at least 8 character";
    return;
  } else {
    setSuccess(passwordInput);
    // passwordInput.value = "";
  }
  if (!confirmPassword) {
    setError(confirmPasswordInput, "Please confirm your password");
    confirmPasswordInput.focus();
    newError.confirmPassword = "Please confirm your password";
    return;
  } else if (confirmPassword !== password) {
    setError(confirmPasswordInput, "Your password doesn't match");
    confirmPasswordInput.focus();
    newError.confirmPassword = "Your password doesn't match";
    return;
  } else {
    setSuccess(confirmPasswordInput);
    // confirmPasswordInput.value = "";
    showModal.classList.remove("hidden");
    signUpPage.style.display = "none";

    setTimeout(function () {
      showModal.classList.add("hidden");
    }, 3000);

    const details = {
      name,
      email,
      phoneNum,
      password,
      confirmPassword,
    };
    newError.push(details);
    nameInput.value = "";
    emailInput.value = "";
    phoneNumInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
    console.log(newError);

    showVerify.classList.remove("show_off");

    subForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showMark.classList.remove("remove");
      showOverlay.classList.remove("remove");
      showSuccess.classList.remove("remove");

      setTimeout(function () {
        showVerify.classList.add("show_off");
      }, 1000);
      setTimeout(function () {
        location.href = "homepage.html";
      }, 1000);
      // homePage.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    });
  }
};
