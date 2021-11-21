const fullName = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const form = document.querySelector("#contact-form");
const subjectError = document.querySelector(".subject-error");
const emailError = document.querySelector(".email-error");
const addressError = document.querySelector(".address-error");
const nameError = document.querySelector(".name-error");
const message = document.querySelector(".message");

function validateForm(event) {
  event.preventDefault();
  message.innerHTML = "";
  if (checkLength(fullName.value, 1)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (checkLength(subject.value, 10)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
  if (emailValidator(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkLength(address.value, 25)) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
  if (
    checkLength(fullName.value, 1) &&
    checkLength(subject.value, 10) &&
    emailValidator(email.value) &&
    checkLength(address.value, 25)
  ) {
    form.reset();
    message.innerHTML = "Your message has been sent";
  }
}

form.addEventListener("submit", validateForm);

function removeMessageAfterSubmission() {
  message.innerHTML = "";
}

form.addEventListener("keyup", removeMessageAfterSubmission);

function checkLength(value, len) {
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
