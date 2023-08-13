
let cowipubtn = document.getElementById("cowipubtn");
function cnumberValid(){
  let cnumber = document.getElementById("cn").value;
    let cnerror = document.getElementById("cn-error");
    if(cnumber == ""){
     cnerror.innerHTML="Card number required";
     cowipubtn.disabled = true;
    }
    else{
        cowipubtn.disabled = false;
        cnerror.innerHTML=" ";
    }
}
function exdateValid(){
    let expdate = document.getElementById("expd").value;
    let expderror = document.getElementById("exd-error");
    if(expdate == ""){
     expderror.innerHTML="Expire date required";
     cowipubtn.disabled = true;
    }
    else{
        cowipubtn.disabled = false;
        expderror.innerHTML=" ";
    }
}
function cvccvvValid(){
    let cvccvv = document.getElementById("cvcc").value;
    let cvccerror = document.getElementById("cvcc-error");
    if(cvccvv == ""){
      cvccerror.innerHTML= "CVC/CVV required";
      cowipubtn.disabled = true;
    }
    else{
        cowipubtn.disabled = false;
        cvccerror.innerHTML= " ";
    }
}
function nocValid(){
    let nameonc= document.getElementById("noc").value;
    let nocerror = document.getElementById("noc-error");
    if(nameonc == ""){
     nocerror.innerHTML="Name on card required";
     cowipubtn.disabled = true;
    }
    else{
        cowipubtn.disabled = false;
        nocerror.innerHTML=" ";
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
    document.getElementById("pamount").innerHTML = localStorage.getItem("sctp");
   
}





function cnumberValid() {
    const cardNumber = document.getElementById("cn").value;
    const cardNumberError = document.getElementById("cn-error");
    
    if (!/^\d{16}$/.test(cardNumber)) {
        cardNumberError.innerText = "Please enter a valid 16-digit card number";
    } else {
        cardNumberError.innerText = "";
    }
    enablePayButton();
}

function exdateValid() {     
    const expiryDate = document.getElementById("expd").value;
    const expiryDateError = document.getElementById("exd-error");
    
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
        expiryDateError.innerText = "Please enter a valid expiry date (MM/YY)";
    } else {
        expiryDateError.innerText = "";
    }
    enablePayButton();
}

function cvccvvValid() {
    const cvcCvv = document.getElementById("cvcc").value;
    const cvcCvvError = document.getElementById("cvcc-error");
   
    if (!/^\d{3,4}$/.test(cvcCvv)) {
        cvcCvvError.innerText = "Please enter a valid CVC/CVV (3 or 4 digits)";
    } else {
        cvcCvvError.innerText = "";
    }
    enablePayButton();
}

function nocValid() {
    const nameOnCard = document.getElementById("noc").value;
    const nameOnCardError = document.getElementById("noc-error");
  
    if (nameOnCard.trim() === "") {
        nameOnCardError.innerText = "Please enter the name on the card";
    } else {
        nameOnCardError.innerText = "";
    }
    enablePayButton();
}

function enablePayButton() {
    const payButton = document.getElementById("cowipubtn");
    const cardNumber = document.getElementById("cn").value;
    const expiryDate = document.getElementById("expd").value;
    const cvcCvv = document.getElementById("cvcc").value;
    const nameOnCard = document.getElementById("noc").value;

   
    if (
        /^\d{16}$/.test(cardNumber) &&
        /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate) &&
        /^\d{3,4}$/.test(cvcCvv) &&
        nameOnCard.trim() !== ""
    ) {
        payButton.disabled = false;
    } else {
        payButton.disabled = true;
    }
}







