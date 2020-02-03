const emailValidationUrl = "https://pozzad-email-validator.p.rapidapi.com/emailvalidator/validateEmail/";

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "pozzad-email-validator.p.rapidapi.com",
        "x-rapidapi-key": "caea91c817msh03c57ad2b6e6d26p102b41jsnd41f70aadc60"
    }
};

$("#emailSend").click(function (event) {
    var emailFieldList = document.getElementsByClassName("emailField");

    var email = emailFieldList[0];
    
    settings.url = emailValidationUrl + email.value;

    $.ajax(settings).done(function (response) {
        if (response.isValid) {
            sendEmail();
        }else{
            alert("Please Enter a valid Email address.")
        }
    });
});
