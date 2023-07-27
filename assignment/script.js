document.addEventListener('DOMContentLoaded', function() {
    const accountForm = document.getElementById('accountForm');
    const errorText = document.getElementById('errorText');
  
    accountForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const accountType = document.getElementById('accountType').value;
  
      // Simple form validation
      if (name.trim() === '' || email.trim() === '' || accountType.trim() === '') {
        errorText.textContent = 'All fields are required.';
      } else {
        // Form is valid, show alert and clear error message
        errorText.textContent = '';
        alert('Account opened successfully! Thank you, ' + name + ', for choosing My Banking.');
        accountForm.reset();
      }
    });
  });
  