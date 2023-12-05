/*function pintar() {
    ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("hello")
ele.addEventListener("click", pintar);*/


function pintar1() {
    ele1.style.backgroundColor = 'black'
}
const ele1 = document.getElementById("cuadro1")
ele1.addEventListener("click", pintar1);

function pintar2() {
    ele2.style.backgroundColor = 'black'
}
const ele2 = document.getElementById("cuadro2")
ele2.addEventListener("click", pintar2);

function pintar3() {
    ele3.style.backgroundColor = 'black'
}
const ele3 = document.getElementById("cuadro3")
ele3.addEventListener("click", pintar3);

function pintar4() {
    ele4.style.backgroundColor = 'black'
}
const ele4 = document.getElementById("cuadro4")
ele4.addEventListener("click", pintar4);

let global; 
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        global="pink";
    } else if (event.key === 's') {
        global="orange";
    }else if (event.key === 'd') {
        global="skyblue";
    }else if (event.key === 'q') {
        agregarElemento("purple");
    } else if (event.key === 'w') {
        agregarElemento("gray");
    }else if (event.key === 'e') {
        agregarElemento("brown");
    }
    const keycolores = document.getElementById ("key");
    keycolores.style.backgroundColor=global;
});

function agregarElemento(color) {
    contenedor = document.getElementById("contenedor");
    nuevoElemento = document.createElement("div");
    nuevoElemento.className = "cuadrado";
    contenedor.appendChild(nuevoElemento);
    nuevoElemento.style.backgroundColor=color
}