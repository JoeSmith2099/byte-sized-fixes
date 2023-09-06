function makeRequest(name, email, subject, message) {
  // Create a new XMLHttpRequest object.
  var xhr = new XMLHttpRequest();

  // Set the request method and URL.
  xhr.open("POST", "/request");

  // Set the request headers.
  xhr.setRequestHeader("Content-Type", "application/json");

  // Create a JSON object to send in the request body.
  var data = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  // Send the request.
  xhr.send(JSON.stringify(data));
}

// Example usage.
makeRequest("John Smith", "john.smith@email.com", "My computer is broken", "Please fix my computer.");
