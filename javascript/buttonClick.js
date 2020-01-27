var email;

window.addEventListener("load", function (event) {    
    var emailFieldList = document.getElementsByClassName("emailField");

    email = emailFieldList[0];
});


function checkUserInput() {
    if ((email.value !== null) && (email.value !== "")) {
        sendEmail();
    } else {
        alert("Please enter an email address.")
    }
}

function sendEmail() {
    var show = document.getElementById("showSection");
    var button = document.getElementById("hideForm");
    button.style.display = "none";
    show.style.display = "block";
}
