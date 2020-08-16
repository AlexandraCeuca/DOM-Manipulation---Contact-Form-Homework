const submit = document.getElementById("submitButton");
const firstName= document.getElementById("fname");
const lastName= document.getElementById("lname");
const textArea= document.getElementById("textareaField");

submit.addEventListener("click", function() {
    console.log("here");
    let formValid = true;
    if (firstName.value) {
        console.log("firstName: " + firstName.value +" input is valid!")
    } else {
        formValid = false;
        firstName.classList.add("invalidInput");
        console.log("firstName invalid!");
    }
    if (lastName.value) {
        console.log("lastName: " + lastName.value +" input is valid!")
    } else {
        formValid = false;
        lastName.classList.add("invalidInput");
        console.log("lastName invalid!");
    }
    if (textArea.value) {
        console.log("textArea: " + textArea.value +" input is valid!")
    } else {
        formValid = false;
        textArea.classList.add("invalidInput");
        console.log("textArea invalid!");
    }

    if (formValid) {
        const confirmationBanner = document.getElementById("banner");
        confirmationBanner.style.visibility = "visible";
        const confimationText = document.getElementById("confirmationText");
        confimationText.innerText = "Thank you for contacting us, " + firstName.value;

        const closeBannerButton= document.getElementById("confimationBanneClose");
        closeBannerButton.addEventListener("click", function() {
            confirmationBanner.style.visibility = "hidden";
        });
    }
});

firstName.addEventListener("input", function() { validateInput("fname");});
lastName.addEventListener("input", function() { validateInput("lname");});
textArea.addEventListener("input", function() { validateInput("textareaField");});


function validateInput(inputId) {
    const element = document.getElementById(inputId);
    console.log("here");
    if (element.value) {
        element.classList.remove("invalidInput");
    } else {
        element.classList.add("invalidInput");
    }
}


