document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple hardcoded credentials for demonstration purposes
    const validUsername = "user";
    const validPassword = "password123";

    // Validate inputs
    if (username === "" || password === "") {
        alert("Both fields are required!");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // Check credentials (in a real application, this would be handled by a server)
    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        // Redirect to a company's homepage
        window.location.href = "https://www.example.com"; // Replace with actual URL
    } else {
        alert("Invalid username or password.");
    }
});