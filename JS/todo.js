var sound = new Audio();
    sound.src = "./SOUND/melodia.mp3";

function iniciar(){
    myf1();
    sound.play();
    setTimeout(() => {
    }, 1000);
}

onload = iniciar();