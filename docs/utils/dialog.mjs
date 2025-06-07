/**
 * Función para crear dialogo (pop-up) ventana emergente
 * @param {string} contenido
 * @returns {HTMLDialogElement}
 */
export const abrirDialogo = (contenido = "") => {
  const dialogo = document.createElement("dialog");
  document.body.appendChild(dialogo);
  dialogo.showModal();
  dialogo.innerHTML = `
    <div>
        <header>
            <p>Resultado</p>
            <span>X</span>
        </header>
        <p style="padding: 24px">${contenido}</p>
    </div>
    `;
  cerrarDialogo();
};
/**
 * Cierra el dialogo evaluando el evento de click, y si éste no lo
 * contiene cierra el dialogo y elimina el elemento del DOM
 * @returns {void}
 */
const cerrarDialogo = () => {
  const dialogo = document.querySelector("dialog");
  const divDialogo = dialogo.querySelector("div");
  const botonCerrar = dialogo.querySelector("span");

  if (dialogo) {
    dialogo.onclick = (event) => {
      if (
        (dialogo && !divDialogo?.contains(event.target)) ||
        botonCerrar.contains(event.target)
      ) {
        dialogo.close();
        document.body.removeChild(dialogo);
      }
    };
  }
};
