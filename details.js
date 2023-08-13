
let conwipubtn = document.getElementById("conwipubtn");
let email
function nameValid(){
  let name = document.getElementById("nm").value;
    let nmerror = document.getElementById("nm-error");
    if(name == ""){
     nmerror.innerHTML="Name required";
     conwipubtn.disabled = true;
    }
    else{
        conwipubtn.disabled = false;
        nmerror.innerHTML=" ";
    }
}
function phoneValid(){
    let phone = document.getElementById("ph").value;
    let poerror = document.getElementById("mo-error");
    if(phone == ""){
     poerror.innerHTML="Phone required";
     conwipubtn.disabled = true;
    }
    else{
        conwipubtn.disabled = false;
        poerror.innerHTML=" ";
    }
}
function emailValid(){
    email = document.getElementById("em").value;
    let emerror = document.getElementById("em-error");
    if(email == ""){
      emerror.innerHTML="Email required";
      conwipubtn.disabled = true;
    }
    else{
        conwipubtn.disabled = false;
        emerror.innerHTML=" ";
    }
}
function cemailValid(){
    let cemail= document.getElementById("cem").value;
    let cemerror = document.getElementById("cem-error");
    if(cemail == ""){
     cemerror.innerHTML="Confirm email required";
    }
    if(cemail != email){
        cemerror.innerHTML="Email not matched";
        conwipubtn.disabled = true;
    }
    else{
        conwipubtn.disabled = false;
        cemerror.innerHTML=" ";
    }
}



window.addEventListener("load",init);
function init(){
    document.getElementById("do").innerHTML = localStorage.getItem("scdate");
    document.getElementById("to").innerHTML = localStorage.getItem("sctime");
    document.getElementById("slao").innerHTML = localStorage.getItem("scsla");
    document.getElementById("slco").innerHTML = localStorage.getItem("scslc");
    document.getElementById("fao").innerHTML = localStorage.getItem("scfa");
    document.getElementById("fco").innerHTML = localStorage.getItem("scfc");
    document.getElementById("io").innerHTML = localStorage.getItem("sci");
    document.getElementById("tp").innerHTML = localStorage.getItem("sctp");
   
}








function nameValid() {
    const fullName = document.getElementById("nm").value;
    const nameError = document.getElementById("nm-error");
    if (fullName.trim() === "") {
        nameError.innerText = "Please enter your full name";
    } else {
        nameError.innerText = "";
    }
    enableContinueButton();
}

function phoneValid() {
    const phoneNumber = document.getElementById("ph").value;
    const phoneError = document.getElementById("mo-error");
    
    if (!/^\d{9,}$/.test(phoneNumber)) {
        phoneError.innerText = "Please enter a valid mobile number";
    } else {
        phoneError.innerText = "";
    }
    enableContinueButton();
}

function emailValid() {
    const email = document.getElementById("em").value;
    const emailError = document.getElementById("em-error");
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.innerText = "Please enter a valid email";
    } else {
        emailError.innerText = "";
    }
    enableContinueButton();
}

function cemailValid() {
    const confirmEmail = document.getElementById("cem").value;
    const email = document.getElementById("em").value;
    const confirmEmailError = document.getElementById("cem-error");
    if (confirmEmail !== email) {
        confirmEmailError.innerText = "Emails do not match";
    } else {
        confirmEmailError.innerText = "";
    }
    enableContinueButton();
}

function enableContinueButton() {
    const continueButton = document.getElementById("conwipubtn");
    const name = document.getElementById("nm").value;
    const phone = document.getElementById("ph").value;
    const email = document.getElementById("em").value;
    const confirmEmail = document.getElementById("cem").value;


    if (name.trim() !== "" && /^\d{9,}$/.test(phone) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && confirmEmail === email) {
        continueButton.disabled = false;
    } else {
        continueButton.disabled = true;
    }
}


document.getElementById("country-code").addEventListener("change", function () {
    const countryCode = this.value;
    const flagSpan = document.querySelector(".flag-icon");
    flagSpan.className = `flag-icon flag-icon-${countryCode.toLowerCase()}`;
  });
    
