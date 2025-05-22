onload = () => {
    function seleccionarPersonajeJugador() {
    const zuko = document.getElementById('zuko');
    const katara = document.getElementById('katara');
    const aang = document.getElementById('aang');
    const toph = document.getElementById('toph');


    function mostrarPersonaje(text=""){
        alert(text)
    }
    let personajeSeleccionado = '';

    if (zuko.checked) {
        mostrarPersonaje("Zuko🔥")
    } else if (katara.checked) {
        mostrarPersonaje("Katara💧")
    } else if (aang.checked) {
        mostrarPersonaje("Aang 🌬️")
    } else if (toph.checked) {
        mostrarPersonaje("Toph 🌍")
    } else {
        alert('Por favor selecciona un personaje.');
        return;
    }

}

let botonPersonajeJugador = document.getElementById('boton-personaje');
botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

}