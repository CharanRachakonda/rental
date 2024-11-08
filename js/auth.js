// Signup function
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Get existing users from localStorage or create an empty array if none exists
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username already exists
    const existingUser = users.find(user => user.username === newUsername);
    if (existingUser) {
        alert("Username already exists. Please choose a different username.");
    } else {
        // Add new user to the array and save it in localStorage
        users.push({ username: newUsername, password: newPassword });
        localStorage.setItem('users', JSON.stringify(users));

        alert("Signup successful! Please log in.");
        window.location.href = "login.html";
    }
});

// Login function
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if credentials match
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert("Login successful");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
});

// Logout function
document.getElementById('logoutButton')?.addEventListener('click', function () {
    alert("Logged out successfully");
    window.location.href = "login.html";
});
