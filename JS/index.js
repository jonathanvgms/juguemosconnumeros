var sound = new Audio();
    sound.src = "./SOUND/correcto.mp3";

var soundError = new Audio();
    soundError.src = "./SOUND/incorrecto.mp3";

// document.addEventListener('DOMContentLoaded', () => {
//     var boton1 = document.getElementById('hola10');
//     console.log(boton1)
//     boton1.addEventListener("click", myf1);
// })
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
        location.href = "./reto2.html";
    }, 1000);
}
    function myf1() {
        var boton1 = document.getElementById('hola10');
        boton1.style.backgroundColor = 'green';
    }

    function myf2() {
        var boton2 = document.getElementById('error1');
        boton2.style.backgroundColor = 'yellow';
        setTimeout(() => {
            boton2.style.backgroundColor = 'white';
        }, 1000);
    }

    function myf3() {
        var boton3 = document.getElementById('error2');
        boton3.style.backgroundColor = 'yellow';
        setTimeout(() => {
            boton3.style.backgroundColor = 'white';
        }, 1000);
    }
    function myf4() {
        var boton4 = document.getElementById('error3');
        boton4.style.backgroundColor = 'yellow';
        setTimeout(() => {
            boton4.style.backgroundColor = 'white';
        }, 1000);
    }
function cambiar3(){
    myf1();
    sound.play();
    setTimeout(() => {
        location.href = "./reto3.html";
    }, 1000);
}
function cambiar4(){
    myf1();
    sound.play();
    setTimeout(() => {
        location.href = "./reto4.html";
    }, 1000);
}
function cambiar5(){
    myf1();
    sound.play();
    setTimeout(() => {
        location.href = "./reto5.html";
    }, 1000);
}
function cambiar6(){
    myf1();
    sound.play();
    setTimeout(() => {
        location.href = "./reto6.html";
    }, 1000);
}
function cambiar7(){
    myf1();
    sound.play();
    setTimeout(() => {
        location.href = "./reto7.html";
    }, 1000);
}
function cambiar8(){
    myf1();
    sound.play();
    setTimeout(() => {
        location.href = "./reto8.html";
    }, 1000);
}
function cambiar9(){
    myf1();
    sound.play();
    setTimeout(() => {
        location.href = "./reto9.html";
    }, 1000);
}
function cambiarOtro() {
    myf1();
    sound.play();
    setTimeout(() => {
        location.href = "./menu.html"
    }, 1000);
}