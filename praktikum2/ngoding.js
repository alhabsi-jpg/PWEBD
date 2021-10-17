$(function(){
    $("#fullName_error_message").hide();
    $("#userName_error_message").hide();
    $("#email_error_message").hide();

    

    var error_fname = false;
    var error_username = false;
    var error_email = false;
    var error_zipcode= false;
    
    $("#fullName").focusout(function(){
        check_fname();
     });
    
    $("#userName").focusout(function() {
        check_username();
     });

     $("#email").focusout(function() {
        check_email();
     });


     $("#zipCode").focusout(function() {
        check_zipcode();
     });

    
     function check_fname() {
        var pattern = /^[a-zA-Z]*$/;
        var fname = $("#fullName").val();
        if (pattern.test(fname) && fname !== '') {
           $("#fullName_error_message").hide();
        } else {
           $("#fullName_error_message").html("Should contain only Characters");
           $("#fullName_error_message").show();
           error_fname = true;
        }
     }

     function check_username() {
        var username_length = $("#userName").val().length;
        if (username_length < 6) {
           $("#userName_error_message").html("Atleast 6 Characters ");
           $("#userName_error_message").show();
           error_username = true;
        } else {
           $("#userName_error_message").hide();
        }
     }

     function check_email() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#email").val();
        if (pattern.test(email) && email !== '') {
           $("#email_error_message").hide();
        } else {
           $("#email_error_message").html("Invalid Email");
           $("#email_error_message").show();
           error_email = true;
        }
     }


    function check_zipcode() {
        var pattern = /^[0-9]{6}$/;;
        var zipCode = $("#zipCode").val();
        if (pattern.test(zipCode) && zipCode !== '') {
           $("#zip_code_error_message").hide();
        } else {
           $("#zip_code_error_message").html("Should contain only numbere and must be 6 character");
           $("#zip_code_error_message").show();
           error_zipcode = true;
        }
    }

     

     $("#registration_form").submit(function() {
        error_fname = false;
        error_username = false;
        error_email = false;
        error_zipcode=false;
        
        check_fname();
        check_username();
        check_email(); 
        check_zipcode();       

        if (error_fname === false && error_username === false && error_email === false && error_zipcode===false) {
           alert("Registration Successfull");
           return true;
        } else {
           alert("Please Fill the form Correctly");
           return false;
        }


     });
    
})