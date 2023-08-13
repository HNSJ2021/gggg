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







