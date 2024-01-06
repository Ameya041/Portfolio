const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 
  
hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    } 
});
// Function to validate phone number
function validatePhoneNumber(phone) {
    var pattern = /^\d{10}$/;
    return pattern.test(phone);
}

// Function to validate the contact form
function validateContactForm() {
    var name = document.forms["contact-form"]["name"].value;
    var email = document.forms["contact-form"]["email"].value;
    var phoneNumber = document.forms["contact-form"]["phone"].value;
    var message = document.forms["contact-form"]["message"].value;
}
    if (fullname === "" || email === "" || phoneNumber === "" || message === "") { alert("Please fill out all the fields")}
    
        
