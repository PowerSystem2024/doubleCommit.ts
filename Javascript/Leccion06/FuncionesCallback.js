// Llamadas normales a funciones
miFuncion1();
miFuncion2();

function miFuncion1() {
    console.log('Función 1');
}

function miFuncion2() {
    console.log('Función 2');
}

// Funciones de tipo callback
const imprimir = function (mensaje) {
    console.log(mensaje);
};

function sumar(op1, op2, funcionCallback) {
    const res = op1 + op2;
    funcionCallback("Resultado: " + res); // uso correcto de concatenación
}

// Ejecutar suma con callback
sumar(5, 3, imprimir);

// Llamadas asincrónicas con setTimeout
function miFuncionCallback() {
    console.log('¡Saludo asincrónico!');
}

setTimeout(miFuncionCallback, 3000);

setTimeout(function () {
    console.log('¡Saludo asincrónico x2! Hola');
}, 5000);

setTimeout(() => {
    console.log('¡Saludo asincrónico x3!');
}, 4000);

// Reloj con setInterval
let reloj = () => {
    let fecha = new Date();
    let hora = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`; 
    console.log(hora);
};

setInterval(reloj, 1000); // Cada 1 segundo se ejecuta
