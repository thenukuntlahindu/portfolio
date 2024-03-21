// script.js

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can perform further validation or processing here

    // For demonstration, let's just log the values to the console
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear the form fields
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Display a success message (you can modify this based on your UI)
    document.getElementById('statusMessage').innerText = "Message sent successfully!";
}

// Add event listener to the form
document.getElementById('contactForm').addEventListener('submit', handleSubmit);
