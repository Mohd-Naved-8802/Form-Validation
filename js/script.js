function validateForm() {
    let userName = document.getElementById("username").value;
    let number = document.getElementById("number").value;
    let password = document.getElementById("password").value;

    // Username validation
    if (userName === "") {
        document.getElementById("userError").innerHTML = "Username is mandatory*";
        return false;
    } else {
        document.getElementById("userError").innerHTML = "";
    }

    // Number validation
    if (number.length === 0 || number.length < 1) {
        document.getElementById("numError").innerHTML = "Contact number is mandatory*";
        return false;
    } else if (number.length !== 10) {
        document.getElementById("numError").innerHTML = "Contact number should be 10 digits*";
        return false;
    } else if (isNaN(number)) {
        document.getElementById("numError").innerHTML = "Only numbers are allowed*";
        return false;
    } else {
        document.getElementById("numError").innerHTML = "";
    }

    // Password validation
    if (password === "") {
        document.getElementById("passError").innerHTML = "Password is mandatory*";
        return false;
    }else if(!/\d/.test(password) || !/[a-zA-Z]/.test(password)){
        document.getElementById("passError").innerHTML = "Password should contain at least one number or one letter";
        return false;
    }else {
        document.getElementById("passError").innerHTML = "";
    }

    // Password length validation
    if(password.length < 5 || password.length > 12){
        document.getElementById("passError").innerHTML = "Password should be min 5 or max 12 character*";
        return false;
    }else {
        document.getElementById("passError").innerHTML = "";
    }

    return true; // If everything is fine, form submission will proceed
}