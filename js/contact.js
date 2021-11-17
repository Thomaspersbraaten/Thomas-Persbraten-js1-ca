const nameContainer = document.querySelector("#name");
const subjectContainer = document.querySelector("#subject");
const email = document.querySelector("#email");
const addressContainer = document.querySelector("#address");
const submitButton = document.querySelector("#submit");
const nameError = document.querySelector(".name-error");
const formContainer = document.querySelector("form");
const subjectError = document.querySelector(".subject-error");
const emailError = document.querySelector(".email-error");
const addressError = document.querySelector(".address-error");

function validateForm(event) {
  event.preventDefault();

  if (checklength(nameContainer.value, 1)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (checklength(subjectContainer.value, 10)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
  if (emailValidator(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checklength(addressContainer.value, 25)) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
}

submitButton.addEventListener("submit", validateForm);

nameContainer.addEventListener("keyup", validateForm);
subjectContainer.addEventListener("keyup", validateForm);
email.addEventListener("keyup", validateForm);
addressContainer.addEventListener("keyup", validateForm);

function checklength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function emailValidator(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patterMatches = regEx.test(email);
  return patterMatches;
}
