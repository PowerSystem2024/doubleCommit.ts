// const miPromesa = new Promise((resolve, reject) => {
//     const expresion = false
//     if (expresion) {
//         resolve("Se resolvió correctamente!")
//     } else {
//         reject(new Error("Se produjo un error."))
//     }
// })

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// )

// miPromesa.then((res) => console.log(res)).catch((error) => console.log(error))

// const promesa = new Promise((resolve) => {
//     setTimeout(() => resolve("Saludos desde promesa, callback, función flecha y setTimeout"), 3000)
// })

// El llamado a la promesa
//promesa.then((valor) => console.log(valor))

// async indica que una función devuelve una promesa
async function miFuncionConPromesa() {
    return "Saludos desde la función asíncrona"
}

//miFuncionConPromesa().then(valor => console.log(valor))

// async / await
async function funcionConPromesaYAwait() {
    const miPromesa = new Promise((resolve) => {
        resolve("Promesa con await")
    })
    console.log(miPromesa) // Sin await undefined
    console.log(await miPromesa) // <- con await devuelve el valor
}

// await funcionConPromesaYAwait().then((valor) => console.log(valor))

const funcionConPromesaAwaitTiemout = async () => {
const miPromesa = new Promise((resolve) => {
    console.log("Inicio de función")
    setTimeout(() => resolve("Promesa con timeout"), 3000)
    console.log("Fin de función")
})
console.log(await miPromesa)
}

// Llamamos a la función
funcionConPromesaAwaitTiemout()