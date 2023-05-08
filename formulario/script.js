const form = document.querySelector('.form');
const submitBtn = document.querySelector('.submit');

form.addEventListener('input', () => {
  const nameInput = document.querySelector('#name').value.trim();
  const emailInput = document.querySelector('#email').value.trim();
  const messageInput = document.querySelector('#message').value.trim();
  
  if (nameInput !== '' && emailInput !== '' && messageInput !== '') {
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = '#396796';
  } else {
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = '#ccc';
  }
});
