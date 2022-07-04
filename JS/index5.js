var sound = new Audio();
    sound.src = "./SOUND/correcto.mp3";

var soundError = new Audio();
    soundError.src = "./SOUND/incorrecto.mp3";

function myf1() {
    var boton1 = document.getElementById('hola10');
    boton1.style.backgroundColor = '#33FF00';
}

function myf2() {
    var boton2 = document.getElementById('error1');
    boton2.style.backgroundColor = '#FF0000';
    setTimeout(() => {
        boton2.style.backgroundColor = 'white';
    }, 1000);
}

function myf3() {
    var boton3 = document.getElementById('error2');
    boton3.style.backgroundColor = '#FF0000';
    setTimeout(() => {
        boton3.style.backgroundColor = 'white';
    }, 1000);
}
function myf4() {
    var boton4 = document.getElementById('error3');
    boton4.style.backgroundColor = '#FF0000';
    setTimeout(() => {
        boton4.style.backgroundColor = 'white';
    }, 1000);
}

function errores1() {
    soundError.play();
        myf2();
}
function errores2() {
    soundError.play();
        myf3();
}
function errores3() {
    soundError.play();
        myf4();
}
function cambiar2(){
    myf1();
    sound.play();
    setTimeout(() => {
        location.href = "./pruebafinal2.html";
    }, 1000);
}

function cambiar3(){
    myf1();
    sound.play();
    setTimeout(() => {
        location.href = "./pruebafinal3.html";
    }, 1000);
}
function cambiar4(){
    myf1();
    sound.play();
    setTimeout(() => {
        location.href = "./pruebafinal4.html";
    }, 1000);
}
function cambiar5(){
    myf1();
    sound.play();
    setTimeout(() => {
        location.href = "./pruebafinal5.html";
    }, 1000);
}
function cambiarOtro() {
    myf1();
    sound.play();
    setTimeout(() => {
        location.href = "./sorpresa.html";
    }, 1000);
}