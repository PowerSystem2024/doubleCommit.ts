(async() => {
    const response = await fetch("https://alquilotodo.com.ar/catalogo/maquinas/acanaladora/index.html")
    const data = await response.text()
    console.log(data)
})()