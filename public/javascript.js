// Get the form element
const form = document.getElementById("myForm");

// Add an event listener to the form submit event
form.addEventListener("submit", function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if the name is empty
  if (name === "") {
    alert("Name is required");
    return false;
  }

  // Check if the email is valid
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    alert("Email is invalid");
    return false;
  }

  // Check if the password is at least 8 characters long
  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
  }

  // If all validation checks pass, submit the form
  form.submit();
});
