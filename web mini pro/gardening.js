
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  const data = { name, email, message };

  fetch('submit.php', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    form.reset();
  })
  .catch(error => {
    console.error(error);
    alert('An error occurred. Please try again later.');
  });
});
