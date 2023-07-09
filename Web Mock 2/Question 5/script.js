function validateForm(event) {
  event.preventDefault();

  // Reset error messages
  clearErrors();

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var password = document.getElementById('password').value;
  var age = document.getElementById('age').value;
  var gender = document.getElementById('gender').value;
  var date = document.getElementById('date').value;
  var color = document.getElementById('color').value;

  // Validate each field
  var isValid = true;

  if (!validateName(name)) {
    isValid = false;
    document.getElementById('nameError').textContent = 'Invalid name';
  }

  if (!validateEmail(email)) {
    isValid = false;
    document.getElementById('emailError').textContent = 'Invalid email';
  }

  if (!validatePhone(phone)) {
    isValid = false;
    document.getElementById('phoneError').textContent = 'Invalid phone number';
  }

  if (!validatePassword(password)) {
    isValid = false;
    document.getElementById('passwordError').textContent = 'Invalid password';
  }

  if (!validateAge(age)) {
    isValid = false;
    document.getElementById('ageError').textContent = 'Invalid age';
  }

  if (!validateGender(gender)) {
    isValid = false;
    document.getElementById('genderError').textContent = 'Please select a gender';
  }

  if (!validateDate(date)) {
    isValid = false;
    document.getElementById('dateError').textContent = 'Invalid date';
  }

  if (!validateColor(color)) {
    isValid = false;
    document.getElementById('colorError').textContent = 'Please select a color';
  }

  if (isValid) {
    // Form is valid, submit the form or perform other actions
    document.getElementById('myForm').submit();
  }
}

function validateName(name) {
  // Check if the name contains at least 2 characters
  return name.length >= 2;
}

function validateEmail(email) {
  // Simple email validation regex pattern
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePhone(phone) {
  // Check if the phone number contains only digits and has at least 10 digits
  var phonePattern = /^\d{10,}$/;
  return phonePattern.test(phone);
}

function validatePassword(password) {
  // Check if the password contains at least 6 characters
  return password.length >= 6;
}

function validateAge(age) {
  // Check if the age is a positive number
  return age > 0;
}

function validateGender(gender) {
  // Check if a gender is selected
  return gender !== '';
}

function validateDate(date) {
  // Check if the date is not empty
  return date !== '';
}

function validateColor(color) {
  // Check if a color is selected
  return color !== '';
}

function clearErrors() {
  var errorElements = document.getElementsByClassName('error');
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = '';
  }
}

function openColorPicker() {
  var colorPicker = document.createElement('input');
  colorPicker.type = 'color';
  colorPicker.addEventListener('input', function () {
    var colorBox = document.getElementById('colorBox');
    var colorInput = document.getElementById('color');
    colorBox.style.backgroundColor = colorPicker.value;
    colorInput.value = colorPicker.value;
  });
  colorPicker.click();
}

document.getElementById('myForm').addEventListener('submit', validateForm);
