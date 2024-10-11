$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault(); 
        let emailValue = $('#email').val();
        let passwordValue = $('#password').val();
        let valid = true;

        
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailValue)) {
            $('#emailError').show();
            valid = false;
        } else {
            $('#emailError').hide();
        }

        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordPattern.test(passwordValue)) {
            $('#passwordError').show();
            valid = false;
        } else {
            $('#passwordError').hide();
        }

        if (valid) {
            alert('Login successful');
        }
    });
});
