let fullName = document.getElementById("fullName");
let errorName = document.getElementById("errorName")

let email = document.getElementById("email");
let errorEmail = document.getElementById("errorEmail")

let phone = document.getElementById("phone");
let errorPhone = document.getElementById("errorPhone")

let password = document.getElementById("password");
let errorPassword = document.getElementById("errorPassword");

function validateEmail() {
    
    let regexpEmail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/

    if (email.value == "") {
        errorEmail.innerHTML = "Enter email address";
        errorEmail.style.color = "red"
        return false
    } else if (regexpEmail.test(email.value)) {
        errorEmail.innerHTML = "Valid email address";
        errorEmail.style.color = "green"
        return true
    } else {
        errorEmail.innerHTML = "Invalid email address";
        errorEmail.style.color = "red"
        return false
    }
}

function validatePassword() {

    let regexpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (password.value == "") {
        errorPassword.innerHTML = "Enter Password";
        errorPassword.style.color = "red"
        return false
    } else if (regexpPassword.test(password.value)) {
        errorPassword.innerHTML = "Valid Password";
        errorPassword.style.color = "green"
        return true
    } else {
        errorPassword.innerHTML = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
        errorPassword.style.color = "red"
        return false
    }
}

function validateName() {

    if (fullName.value == "") {
        errorName.innerHTML = "Enter Name";
        errorName.style.color = "red"
        return false
    } else {
        errorName.innerHTML = "Valid Name";
        errorName.style.color = "green"
        return true
    }
}

function validatePhone() {

    let regexpPhone1 = /[0-9]{3}-[0-9]{3}-[0-9]{4}$/
    let regexpPhone2 = /[0-9]{3}.[0-9]{3}.[0-9]{4}$/
    let regexpPhone3 = /[0-9]{3}" "[0-9]{3}" "[0-9]{4}$/

    if (phone.value == "") {
        errorPhone.innerHTML = "Enter Phone Number";
        errorPhone.style.color = "red"
        return false
    } else if (regexpPhone1.test(phone.value)) {
        errorPhone.innerHTML = "Valid Phone Number";
        errorPhone.style.color = "green"
        return true
    } else if (regexpPhone2.test(phone.value)) {
        errorPhone.innerHTML = "Valid Phone Number";
        errorPhone.style.color = "green"
        return true
    } else if (regexpPhone2.test(phone.value)) {
        errorPhone.innerHTML = "Valid Phone Number";
        errorPhone.style.color = "green"
        return true
    } else {
        errorPhone.innerHTML = "Invalid Phone Number";
        errorPhone.style.color = "red"
        return false
    }
}