/**
 * Función para crear dialogo (pop-up) ventana emergente
 * @param {string} resultadoDelJuego 
 * @returns {HTMLDialogElement}
 */
export const abrirDialogo = (resultadoDelJuego = "") => {
    const dialogo = document.createElement("dialog");
    document.body.appendChild(dialogo)
    dialogo.showModal()
    dialogo.innerHTML = `
    <div>
        <header>
            <p>Resultado</p>
            <span>X</span>
        </header>
        <p style="padding: 24px">${resultadoDelJuego}</p>
    </div>
    `
    cerrarDialogo()
}
/**
 * Cierra el dialogo evaluando el evento de click y si éste no lo
 * contiene elimina el elemento del DOM
 * @returns {void}
 */
const cerrarDialogo = () => {
    const dialogo = document.querySelector("dialog");
    const divDialogo = dialogo.querySelector("div")
    const botonCerrar = dialogo.querySelector("span")

    if (dialogo) {
        dialogo.onclick = (event) => {
            if (dialogo && !divDialogo?.contains(event.target) || botonCerrar.contains(event.target)) {
                dialogo.close()
                document.body.removeChild(dialogo)
            }
        }
    }
}