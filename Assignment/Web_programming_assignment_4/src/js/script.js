$(document).ready(function () {
    var first_name = "";
    var last_name = "";
    var email = "";
    var password = "";
    var confirm_password = "";
    var gender;

    var valid1;
    var valid2;
    var valid3;
    var valid4;
    var valid5;
    var valid6;
    $('.error-msg').hide();
    $('.check-mark').hide();

    //if user signed up, then I save in user_list.
    var user_list = [];
    function add_user(email, password) {
        var user = {
            email: email,
            password: password
        };
        user_list.push(user);
    }
    //when user try to login, then check the info in the list.
    function check_user(email, password) {
        for (var i = 0; i < user_list.length; i++) {
            if (user_list[i].email === email && user_list[i].password === password) {
                return true;
            }
        }
        return false;
    }

    // there are lots of input box, so I control with function about css.
    function valid_input(name) {
        $('.' + name + '-check-mark').show();
        $('.' + name + '-msg').hide();
        $('.' + name + '-input').css('border-color', 'white');
    }
    function invalid_input(name, msg) {
        $('.' + name + '-check-mark').hide();
        $('.' + name + '-msg').show();
        $('.' + name + '-input').css('border-color', 'red');
        $('.' + name + '-msg').html(msg);
    }

    // click nav-login button
    $('#login').click(function () {
        // animation
        $('.sign-up-section').css({
            'opacity': 1
        }).animate({
            'opacity': 0
        }, 500, function () {
            $(this).css('display', 'none');
            $('.section').css('height', 280);
            $('.login-section').css({
                'display': 'block',
                'opacity': 0
            }).animate({
                'opacity': 1
            }, 500);
        });
        $('.signed-up').css('display', 'none');

        // change colors
        $('.login-gage').css('background-color', '#2F558E');
        $('.login-header').css({
            'color': 'black',
            'background-color': 'white'
        });
        $('.sign-up-gage').css('background-color', 'rgb(212, 212, 212)');
        $('.sign-up-header').css({
            'color': 'grey',
            'background-color': 'rgb(212, 212, 212)'
        });

        //return to default value
        $('.error-msg').hide();
        $('.check-mark').hide();
        $('.login-email-input').val('');
        $('.login-email-input').css('border-color', 'white');
        $('.login-password-input').val('');
        $('.login-password-input').css('border-color', 'white');
        $('.login-msg').html('Enter user name and password:');
        $('.login-msg').css('color', 'white');
    })

    //click nav-sign-up button
    $('#sign-up').click(function () {
        //animation
        $('.login-section').css({
            'opacity': 1
        }).animate({
            'opacity': 0
        }, 500, function () {
            $(this).css('display', 'none');
            $('.section').css('height', 530);
            $('.sign-up-section').css({
                'display': 'block',
                'opacity': 0
            }).animate({
                'opacity': 1
            }, 500);
        });

        $('.signed-up').css('display', 'none');
        //change colors
        $('.login-gage').css('background-color', 'rgb(212, 212, 212)');
        $('.login-header').css({
            'color': 'grey',
            'background-color': 'rgb(212, 212, 212)'
        });
        $('.sign-up-gage').css('background-color', '#2F558E');
        $('.sign-up-header').css({
            'color': 'black',
            'background-color': 'white'
        });
        //return to default value
        valid1 = false;
        valid2 = false;
        valid3 = false;
        valid4 = false;
        valid5 = false;
        valid6 = false;
        $('.error-msg').hide();
        $('.check-mark').hide();
        $('.first-name-input').val('');
        $('.first-name-input').css('border-color', 'white');

        $('.last-name-input').val('');
        $('.last-name-input').css('border-color', 'white');

        $('input[type="radio"]').prop('checked', false);

        $('.email-input').val('');
        $('.email-input').css('border-color', 'white');

        $('.password-input').val('');
        $('.password-input').css('border-color', 'white');

        $('.confirm-password-input').val('');
        $('.confirm-password-input').css('border-color', 'white');


    })

    //sign up section

    /*
        most of them is similar. get value and make format. the information of format is from assignment pdf file.
        If the input value is valied, the use valid function, and the other case I use invalid function.
        and every single time I change valid1~valid6 value. If all of valid is true, the I gonna push it to list.
    
    */
    $('.first-name-input').on('input', function () {
        var input = $(this).val();
        var input_format = /^[A-Z][a-zA-Z]*$/;
        if (input_format.test(input)) {
            valid_input('first-name');
            valid1 = true;
        } else {
            invalid_input('first-name', '<div>First name cannot contain numbers!</div>');
            valid1 = false;
        }
        console.log(valid1);
    });
    $('.last-name-input').on('input', function () {
        var input = $(this).val();
        var input_format = /^[A-Z][a-zA-Z]*$/;
        if (input_format.test(input)) {
            valid_input('last-name');
            valid2 = true;
        } else {
            invalid_input('last-name', '<div>Last name cannot contain numbers!</div>');
            valid2 = false;
        }
    });
    $('input[name="gender"]').change(function () {
        valid_input('gender');
        valid3 = true;
    });
    $('.email-input').on('input', function () {
        var input = $(this).val();
        var input_format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (input_format.test(input)) {
            valid_input('email');
            valid4 = true;
        } else {
            invalid_input('email', '<div>Your email address is invalid!</div>');
            valid4 = false;
        }
    });


    $('.password-input').on('input', function () {
        var input = $(this).val();
        var input_format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (input_format.test(input)) {
            valid_input('password');
            valid5 = true;
        } else {
            invalid_input('password', '<div>Requirement: at least 6 characters, one capital letter, <br>one lowercase letter, at least one digit and one special <br>character!</div>');
            valid5 = false;
        }
    });

    $('.confirm-password-input').on('input', function () {
        var passwordInputValue = $('.password-input').val();
        var confirmInputValue = $(this).val();

        if (passwordInputValue === confirmInputValue) {
            valid_input('confirm-password');
            valid6 = true;
        } else {
            invalid_input('confirm-password', '<div>Password does not match!</div>');
            valid6 = false;
        }
    });

    //click Sign up
    $('.sign-up-button').click(function () {
        first_name = $('.first-name-input').val();
        last_name = $('.last-name-input').val();
        email = $('.email-input').val();
        password = $('.password-input').val();
        confirm_password = $('.confirm-password-input').val();
        gender = $('input[name="gender"]:checked').val();

        // If input value is empty, just change error msg and each valid is false.
        if (first_name.trim() === "") {
            invalid_input('first-name', '<div>Please enter your first name!</div>');
            valid1 = false;
        }

        if (last_name.trim() === "") {
            invalid_input('last-name', '<div>Please enter your last name!</div>');
            valid2 = false;
        }
        if (!gender) {
            invalid_input('gender', '<div>Please select your gender!</div>');
            valid3 = false;
        }
        if (email.trim() === "") {
            invalid_input('email', '<div>Please enter your email!</div>');
            valid4 = false;
        }

        if (password.trim() === "") {
            invalid_input('password', '<div>Please enter your password!</div>');
            valid5 = false;
        }
        if (confirm_password.trim() === "") {
            invalid_input('confirm-password', '<div>Please re-enter your password!</div>');
            valid6 = false;
        }

        //If all of valid is true, the push info to user list. and change modal.
        if (valid1 && valid2 && valid3 && valid4 && valid5 && valid6) {
            $('.sign-up-section').css('display', 'none');
            $('.signed-up').css('display', 'block');
            $('.section').css('height', 45);
            add_user(email, password);
        }

    })


    // Login section
    /*
        if the user input is in the user list, the it makes login.
    */
    $('.login-email-input').on('input', function () {
        var input = $(this).val();
        var input_format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (input_format.test(input)) {
            valid_input('login-email');
        } else {
            invalid_input('login-email', '<div>Your email address is invalid!</div>');
        }
    });


    $('.login-password-input').on('input', function () {
        var input = $(this).val();
        if (input === "") {
            invalid_input('login-password', '<div>Please enter your password!</div>');
        } else {
            valid_input('login-password');
        }
    });
    $('.login-button').click(function () {
        if (check_user($('.login-email-input').val(), $('.login-password-input').val())) {
            $('.login-section').css('display', 'none');
            $('.logged-in').css('display', 'block');
            $('.nav').css('height', 0);
            $('.section').css('height', 45);
        }
        else {
            $('.login-msg').html('Credential do not match!');
            $('.login-msg').css('color', 'red');
        }
    })

})