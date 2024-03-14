document.getElementById('Formdata1').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Create object to store form data
    var formData1 = {
      name: name,
      email: email,
      message: message
    };
    
    // You can store formData in localStorage, database, or send it to a server
    
    // For example, store in localStorage
    localStorage.setItem('formData1', JSON.stringify(formData1));
    
    // Clear form fields
    document.getElementById('contactForm').reset();
    
    alert('Form submitted successfully!');
  });