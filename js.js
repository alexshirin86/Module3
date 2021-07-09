$(document).ready(function(){
    var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
    var mail = $('#mail');
    var password = $('#password');
    
    mail.blur(function(){
        if(mail.val() != ''){
            if(mail.val().search(pattern) == 0){
                $('#valid_email').text('Valid');
                mail.removeClass('is-invalid').addClass('ok');
            }else{
                $('#valid_email').text('No valid');
                mail.addClass('valid');
            }
        }else{
            $('#valid_email').text('E-mail is empty!');
            mail.addClass('is-invalid');
        }
    });

    password.blur(function(){
        if(password.val() != ''){
            if(password.val().length >= 6){
                $('#valid_pass').text('Valid');
                password.removeClass('invalid').addClass('valid');
            }else{
                $('#valid_pass').text('No valid');
                password.removeClass('valid').addClass('invalid');
            }
        }else{
            $('#valid_pass').text('Password is empty!');
            password.addClass('invalid');
        }
    });   
   
});