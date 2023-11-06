/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('subscription-form');
  const emailInput = document.getElementById('email');
  const messageArea = document.querySelector('.message');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (email === '') {
      messageArea.textContent = 'Please enter a valid email address.';
    } else {
      messageArea.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
    }

    emailInput.value = '';
  });
});

