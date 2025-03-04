const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');


function validateEmail(input) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (re.test(input.value.trim())) {
        success(input);
    } else {
        error(input, 'Geçersiz email adresi! (Sadece Latin harfleri ve standart karakterler kullanılabilir)');
    }
}

function error(input, message) {
    input.className = 'form-control is-invalid mt-2'
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid mt-2'
}

function checkRequired(inputs){
    inputs.forEach(function(input) {
        if(input.value === '') {
            error(input, `${input.id} is required.`);
            
        } else {
            success(input);
        }
    });
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    checkRequired([username,password,repassword]);
    validateEmail(email);
    checkLength(username,5,20);
    checkLength(password,6,20);
    checkPassword(password,repassword);
});

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} karakter olmalıdır.`)
    } else if (input.value.length > max) {
        error(input, `${input.id} en fazla ${max} karakter olmalıdır.`)
    } else {
        success(input);
    }
};


function checkPassword(input1,input2) {
    if (input1.value !== input2.value) {
        error(input2, `Parolalar birbiri ile eşleşmiyor!`)
    } else if (input2.value == '') {
        error(input2, `${input2.id} girmediniz!`)
    }
}