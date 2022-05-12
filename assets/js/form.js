const contactForm = document.getElementById('form');
const email = document.getElementById('contact-email');
const errorMessage = document.getElementById('email-message');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailRegExp = /^[a-z_\-0-9.*#$!~%^&-+?|]+@+[a-z\-0-9]+(.com)$/gm;
  const emailIsValid = emailRegExp.test(email.value);

  if (!emailIsValid) {
    errorMessage.style.display = 'block';
    email.style.borderBottom = '1px solid #e78587';
    errorMessage.innerHTML = 'Invalid Email!<br>Please enter a valid email in LowerCase';
  } else {
    errorMessage.style.display = 'none';
    errorMessage.innerHTML = '';
    email.style.borderBottom = '1px solid #dbd8d7';
    contactForm.submit();
  }
});
