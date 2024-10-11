$(document).ready(function() {
    // Handle input validation for specific fields
    $('#firstName, #lastName, #username').on('input', function() {
        let value = $(this).val();
        let id = $(this).attr('id');
        let regex = /^[a-zA-Z]+$/; // Only alphabets
        if (id === 'username') {
            regex = /^[a-zA-Z0-9]+$/; // Alphabets and numbers
        }
        if (!regex.test(value)) {
            $(`#${id}Error`).show();
        } else {
            $(`#${id}Error`).hide();
        }
    });

    // Email validation
    $('#email').on('focusout', function() {
        let emailValue = $(this).val();
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;
        if (!emailPattern.test(emailValue)) {
            $('#emailError').show();
        } else {
            $('#emailError').hide();
        }
    });

    // Password validation
    $('#password').on('input', function() {
        let passwordValue = $(this).val();
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordPattern.test(passwordValue)) {
            $('#passwordError').show();
        } else {
            $('#passwordError').hide();
        }
    });

    // Confirm password validation
    $('#confirmPassword').on('input', function() {
        let passwordValue = $('#password').val();
        let confirmPasswordValue = $(this).val();
        if (passwordValue !== confirmPasswordValue) {
            $('#confirmPasswordError').show();
        } else {
            $('#confirmPasswordError').hide();
        }
    });

    //phone number validation
    $('#phoneNumber').on('input', function() {
        let phoneValue = $(this).val().trim();
        // Regular expression to validate phone number (allows digits, spaces, dashes, parentheses, and must be 10 to 15 digits long)
        let phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;

        if (!phonePattern.test(phoneValue)) {
            $('#phoneError').show(); // Show error message if phone number is invalid
        } else {
            $('#phoneError').hide(); // Hide error message if phone number is valid
        }
    });

    // Dynamic city dropdown based on selected state
    const citiesByState = {
       "kerala": ['kochi', 'Alappuzha', 'TVM'],
      "Tamil Nadu": ['Chennai', 'Kanyakumari', 'Coimbatore '],
       "Karnataka": [' Bengaluru', 'Mysore', 'Coorg'],
       "Andhra Pradesh": ['Visakhapatnam', 'Vijayawada', 'Guntur '],
       
    };

    $('#state').on('change', function() {
        const selectedState = $(this).val();
        const citySelect = $('#city');
        citySelect.empty(); // Clear previous options
        citySelect.append('<option value="">Select your city</option>');

        if (citiesByState[selectedState]) {
            citiesByState[selectedState].forEach(function(city) {
                citySelect.append(`<option value="${city}">${city}</option>`);
            });
        }
    });
    //date
    var todayDate = new Date();
    var month = todayDate. getMonth() + 1;
    var year = todayDate.getUTCFullYear();
    var tdate = todayDate. getDate();
    var maxDate = year + "-" + month + "-" +tdate;
   
    document.getElementById("dob").setAttribute("max",maxDate);

    // Handle form submission
    $('#registrationForm').on('submit', function(e) {
        e.preventDefault();
        let valid = true;

        // Check all fields for validity
        $('#firstName, #lastName, #username, #email, #password, #confirmPassword').each(function() {
            if ($(this).val() === '') {
                valid = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });

        if (valid) {
            alert('Registration successful!');
            // Here you can add your form submission logic
        }
    });

    // Back button functionality
   /* $('#backButton').on('click', function() {
        window.history.back(); // Go back to the previous step
    }); */
});
