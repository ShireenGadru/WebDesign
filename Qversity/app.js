function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  const form = document.getElementById('form');
const username = document.getElementById('username');
const email= document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit',(e) =>{
    e.preventDefault(); //prevent opening of url

    checkInputs(); // function used to check inputs
});

function checkInputs() {
    //get values from inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue == ''){
        
        setErrorFor(username, 'Username cannot be  blank');
    }
    else{
        
        setSuccessFor(username);
    }

    if(emailValue == '') {
        setErrorFor(email, 'Email cannot be  blank');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }
    else{
        //add success class
        setSuccessFor(email);
    }

    if(passwordValue == ''){
        
        setErrorFor(password, 'Password cannot be  blank');
    }
    else{
        
        setSuccessFor(password);
    }


    if(password2Value == ''){
        
        setErrorFor(password2, 'Password cannot be  blank');
    }
    else if(passwordValue !== password2Value){
        setErrorFor(password2,'Passwords do no match')

    }
    else{
        
        setSuccessFor(password2);
    }




}

function setErrorFor(input,message) {
    const formGroup = input.parentElement; //get parent element of input field to check if its username/email/pass
    const small = formGroup.querySelector('small'); // returns the error msg in that form group

    //add error message inside small
    small.innerText = message;

    //add error class
    formGroup.className = 'form-group error';
}

function setSuccessFor(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}



function Calculate() {
    const num = document.getElementById('hrs').value;
    const result = num*31;
    document.getElementById("result").innerHTML = 'Rs '+ result +' / week';
  }