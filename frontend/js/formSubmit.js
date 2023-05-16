document.getElementById('inquiry-form-submit-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    submitForm(); 
  });


function validateForm() {
    var nameInput = document.getElementById('input-name').value;
    var emailInput = document.getElementById('input-email').value;
    var phoneInput = document.getElementById('input-phone').value;
    var nationalitySelect = document.getElementById('form-nationality-select').value;
    var inquirySelect = document.getElementById('input-inquiry').value;
    var countryCodeSelect = document.getElementById('input-countryCode').value;
    var additionalReqs = document.getElementById('input-additional-req').value;
  
    // Regular expressions for validation
    var nameRegex = /^[A-Za-z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d+$/;
  
    // Validate name field
    if (!nameInput.match(nameRegex)) {
      alert('Please enter a valid name.');
      return false;
    }
  
    // Validate email field
    if (!emailInput.match(emailRegex)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    // Validate phone field
    if (!phoneInput.match(phoneRegex)) {
      alert('Please enter a valid phone number.');
      return false;
    }
  
    // Check if nationality is selected
    if (nationalitySelect === '') {
      alert('Please select your nationality.');
      return false;
    }
  
    // Check if inquiry is selected
    if (inquirySelect === '') {
      alert('Please select an inquiry.');
      return false;
    }
  
    // Check if country code is selected
    if (countryCodeSelect === '') {
      alert('Please select a country code.');
      return false;
    }
  
    return {
        name: nameInput,
        email: emailInput,
        countryCode: countryCodeSelect,
        phone: phoneInput,
        nationality: nationalitySelect,
        inquiry: inquirySelect,
        additionalReqs: additionalReqs
    }; 
  }
  
const submitForm = () => {
    const formData = validateForm();

    if(formData){
        console.log("valid", formData)
    }
}

