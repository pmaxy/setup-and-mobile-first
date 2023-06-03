const form = document.getElementsById('form');
const validationsMsg = document.querySelector('.validation_msg');
const { name, email, description } = form.elements;
const err = {
  Email_Lowercase: 'Kindly, use lowercase letteres for EmailAddress',
};

const showMessage = (isError, message) => {
  validationsMsg.classList.remove('d-none');
  validationsMsg.textContent = message;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    showMessage(false, 'Complete!');
    form.submit();
    return;
  }

  showMessage(true, err.Email_Lowercase);
});