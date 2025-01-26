document.getElementById('enrollment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const company = document.getElementById('company').value;
    const message = document.getElementById('message').value;

    // Optionally, validate or process the data here
    // For example, you can use regex to validate email or phone format

    // Hide form and show confirmation message
    document.getElementById('enrollment-form').style.display = 'none';
    document.getElementById('confirmation').classList.remove('hidden');

    // Optionally, log the submitted data
    console.log("Enrollment Data:", { name, email, phone, company, message });
});
