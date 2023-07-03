const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const ageInput = document.getElementById('age');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const dobInput = document.getElementById('dob');
const colorBox = document.getElementById('colorBox');
const body = document.body;
const colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('change', function() {
  const color = this.value;
  body.style.backgroundColor = color;
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!validateName(nameInput.value)) {
    alert('Please enter a valid name (2 to 30 characters, only letters and spaces).');
    return;
  }

  if (!validateEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!validatePhone(phoneInput.value)) {
    alert('Please enter a valid phone number (10 digits).');
    return;
  }

  if (!validatePassword(passwordInput.value)) {
    alert('Please enter a valid password (minimum 8 characters).');
    return;
  }

  if (!validateAge(ageInput.value)) {
    alert('Please enter a valid age (must be between 18 and 99).');
    return;
  }

  if (!validateGender()) {
    alert('Please select a gender.');
    return;
  }

  if (!colorBox.style.backgroundColor) {
    alert('Please select a color.');
    return;
  }

  alert('Form submitted successfully!');
  form.reset();
});

function validateName(name) {
  return /^[a-zA-Z ]{2,30}$/.test(name);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^[0-9]{10}$/.test(phone);
}

function validatePassword(password) {
  return password.length >= 8;
}

function validateAge(age) {
  return /^[0-9]{1,3}$/.test(age) && age >= 18 && age <= 99;
}

function validateGender() {
  return Array.from(genderInputs).some(input => input.checked);
}



function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
