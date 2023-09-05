// request.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Find the form element by its ID
  var form = document.getElementById("request-form");

  // Add event listener for form submission
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Process the form data
    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var subject = form.elements["subject"].value;
    var message = form.elements["message"].value;

    // Create a popup to display the form data
    var popupMessage = `Form Data:
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}`;
    alert(popupMessage);
    
    // Perform any necessary form validation or data processing here

    // Example: Log the form data to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // You can also send the form data to a server using AJAX or fetch

    // Reset the form fields
    form.reset();
  });
});
