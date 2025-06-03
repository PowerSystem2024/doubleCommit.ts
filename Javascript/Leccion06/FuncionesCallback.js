miFuncion1()
miFuncion2()

function miFuncion1() {
    console.log('Función 1')
}

function miFuncion2() {
    console.log('Función 2')
}

// Función de tipo callback
let imp = function imprimir(mensaje) {
    console.log(mensaje)
}

function sumar(op1, op2, funcionCallback) {
    let res = op1 + op2
    funcionCallback(`Resultado = ${res}`)
}

sumar(1, 3, imp)

// Llamadas asíncronas con uso setTimeOut
function miFuncionCallback() {
    console.log("Saludo asincíncrono después de 3 segundos")
}

// setTimeout(miFuncionCallback, 5000)

// setTimeout( function() { console.log("Saludo asíncrono 3") }, 3000)

// setTimeout(() => {
//     console.log("Saludo asíncrono 2")
// }, 4000)

//setInterval(reloj, 1000) // cada un segundo

document.addEventListener("DOMContentLoaded", () => {
    let reloj = () => {
        let fecha = new Date()
        return `${fecha.getHours().toString().padStart(2, "0")}:${String(fecha.getMinutes()).padStart(2, "0")}:${fecha.getSeconds()}`;
    }

    const timer = document.getElementById("timer")
    setInterval(() => {
        timer.innerHTML = reloj()
    }, 1000)
})