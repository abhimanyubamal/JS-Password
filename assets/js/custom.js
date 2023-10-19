let user = document.getElementById("username");
let pass = document.getElementById("password");
let button = document.getElementById("show-hide-button");

function reset() {
    user.value = '';
    pass.value = '';
    button.innerHTML = 'Show Password';
}

function checkInput() {
    if (pass.value === '' || user.value === '') {
        alert("Enter correct username and password")
        reset();
    }
}

function showPassword() {
    if (pass.type === 'password') {
        pass.type = 'text';
        button.innerHTML = 'Hide Password';
    }
    else {
        pass.type = 'password';
        button.innerHTML = 'Show Password';
    }
    checkInput();
}