// get element by their id's and store them into a variable
const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

// add a event listener for our button to start other functions we want
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    //get the values from the inputs
    //trim function removes all of the white space
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    //count will make sure that everything was filled out 
    let count = 0;

    if(firstNameValue === ''){
        //show error
        //add error class
        setErrorFor(firstName, 'First Name cannot be blank')
    }else {
        setSuccessFor(firstName)
        count++
    }

    if(lastNameValue === ''){
        //show error
        //add error class
        setErrorFor(lastName, 'Last Name cannot be blank')
    }else {
        setSuccessFor(lastName)
        count++
    }

    if(emailValue === ''){
        //show error
        //add error class
        setErrorFor(email, 'Last Name cannot be blank')
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid')
    }else {
        setSuccessFor(email)
        count++
    }

    if(passwordValue === ''){
        //show error
        //add error class
        setErrorFor(password, 'Last Name cannot be blank')
    }else {
        setSuccessFor(password)
        count++
        setTimeout(alertSuccess, 0);
    }

    //showing success message
    function alertSuccess(){
            if(count == 4) {
            alert('Success!')
        } else {
            alert('Something went wrong! Please check that your information is correct.')
        }
    }
    
}

// --------------------------------------validation functions
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    //.form-control
    const small = formControl.querySelector('small');
     
    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    //form.control
    
    //add success className
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}