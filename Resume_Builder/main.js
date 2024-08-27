// Registration Form Submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('User Registered Successfully!');
    // Save user data to local storage or send it to the backend server
});

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('User Logged In Successfully!');
    // Authenticate user and redirect to profile page
});

// Profile Form Submission
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Profile Updated Successfully!');
    // Save profile data to local storage or send it to the backend server
});

// Real-time Preview and Export Functionality
document.getElementById('resumeForm').addEventListener('input', function() {
    updatePreview();
});

function updatePreview() {
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    document.getElementById('resumePreview').innerHTML = `
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        
