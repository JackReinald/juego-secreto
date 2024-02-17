// Nota: Una función que no retorna nada TAMBIÉN ESTÁ BIEN, el return no siempre es necesario pero hace parte
// de las buenas prácticas de programación.
// Recuerda usar F12 para abrir la CONSOLA del navegador directamente.

let numeroSecreto = 0; // Variable de alcance global, existe en todo el programa.
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(`¿Ambos valores son iguales?: ${numeroDeUsuario == numeroSecreto}`);    // == significa comparación entre valores
    //console.log(`¿Ambos valores son iguales?: ${numeroDeUsuario === numeroSecreto}`);   // === significa comparación entre valores y los TIPOS de valores, es decir, string con string, number con number, etc.
    console.log("Número secreto: " + numeroSecreto );
    console.log("Intentos: " + intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${ (intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } 
    // el usuario no acertó
    else if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento("p","El número secreto es menor");
        intentos++;
        limpiarCaja();
    } else {
        asignarTextoElemento("p","El número secreto es mayor");
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    /* Esta es la estructura tradicional de la función donde retornamos la variable, pero este proceso puede acortarse aún más
    
    let numeroSecreto = Math.floor(Math.random()*10) + 1;
    return numeroSecreto; // variable de alcance de bloque, es decir, sólo existe dentro de esta función
    */
   
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1; // Se acorta retornando directamente la operación que genera los números al azar.

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya se sortearon todos los números
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }        
    }
}
function limpiarCaja() {
    /* valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = ""; */

    document.querySelector("#valorUsuario").value = ""; //forma más simple:
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',"Indica un número del 1 al 10");
    // Generar número aleatorio
    numeroSecreto = generarNumeroSecreto();
    // Iniciar el número de intentos
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // Generar número aleatorio
    // Iniciar el número de intentos
    condicionesIniciales();
    // Desahabilitar el botón de "Nuevo Juego"
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
