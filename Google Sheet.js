const scriptURL = 'https://script.google.com/macros/s/AKfycby6spMwyzbCdDTNB59UVyKOfmxtvJw1kNiW3YMOeYKFtE0JXu6LcXn6z2bH6tbFgZ9k/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! You have successfully joined the waitlist :)" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})