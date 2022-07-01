// let btnNumeros = document.getElementById("btnNumeros")
let btnRetos = document.getElementById("btnRetos");
let btnOperciones = document.getElementById("btnOperciones");
let btnRetosOpera = document.getElementById("btnRetosOpera");
let btnFiguras = document.getElementById("btnFiguras");
let btnRetosFig = document.getElementById("btnRetosFig");
let btnRetoFinal = document.getElementById("btnRetoFinal");

var terminarNumeros = document.getElementById("terminarNumeros");
let numerosA= document.getElementsByClassName("btnTerminarReto");
let terminarOperacion = document.getElementById("terminarOperacion");
let btnTerminarRetosr = document.getElementsByClassName("btnTerminarRetosr");

// terminarNumeros.addEventListener("click", activar1)




// let numeros = document.getElementsByClassName("btnTerminarRetosr")
// let numeros = document.getElementsByClassName("btnTerminarRetosr")


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function redireccionar() {
    location.href = "menu.html";
}
function activar1() {
    setCookie("btnRetos.disabled", false, 10);
}
function activar2() {
    setCookie("btnOperciones.disabled",false,10);
}
function activar3() {
    setCookie("btnRetosOpera.disabled",false,10);
}
function activar4() {
    setCookie("btnFiguras.disabled",false,10);
}
function activar5() {
    setCookie("btnRetosFig.disabled",false,10);
}
function activar6() {
    setCookie("btnRetoFinal.disabled",false,10);
}




function activartodos() {
    if (getCookie("btnRetos.disabled") == false) {
        btnRetos.disabled = getCookie("btnRetos.disabled");        
    }
    if (getCookie("btnOperciones.disabled") == false) {
        btnRetos.disabled = getCookie("btnRetos.disabled");
        btnOperciones.disabled = getCookie("btnOperciones.disabled");
    }
    if (getCookie("btnRetosOpera.disabled") == false) {
        btnRetos.disabled = getCookie("btnRetos.disabled");
        btnOperciones.disabled = getCookie("btnOperciones.disabled");
        btnRetosOpera.disabled = getCookie("btnRetosOpera.disabled");
        
    }
    if (getCookie("btnFiguras.disabled") == false) {
        btnRetos.disabled = getCookie("btnRetos.disabled");
        btnOperciones.disabled = getCookie("btnOperciones.disabled");
        btnRetosOpera.disabled = getCookie("btnRetosOpera.disabled");
        btnFiguras.disabled = getCookie("btnFiguras.disabled")
    }
    if (getCookie("btnRetosFig.disabled") == false) {
        btnRetos.disabled = getCookie("btnRetos.disabled");
        btnOperciones.disabled = getCookie("btnOperciones.disabled");
        btnRetosOpera.disabled = getCookie("btnRetosOpera.disabled");
        btnFiguras.disabled = getCookie("btnFiguras.disabled");
        btnRetosFig.disabled = getCookie("btnRetosFig.disabled");
    }
    if (getCookie("btnRetoFinal.disabled") == false) {
        btnRetos.disabled = getCookie("btnRetos.disabled");
        btnOperciones.disabled = getCookie("btnOperciones.disabled");
        btnRetosOpera.disabled = getCookie("btnRetosOpera.disabled");
        btnFiguras.disabled = getCookie("btnFiguras.disabled");
        btnRetosFig.disabled = getCookie("btnRetosFig.disabled");
        btnRetoFinal.disabled = getCookie("btnRetoFinal.disabled");
    }
}

onload = activartodos();