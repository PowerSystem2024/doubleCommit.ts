/**
 * Método para obtener el eje {x, y} y devolverlo en la función callback
 * @param {callback} cuandoMueva
 * @returns {Event}
 */
export const escucharMovimientoMouse = (cuandoMueva) => {
  const actualizarEje = (event) => {
    const eje = { x: event.clientX, y: event.clientY };
    cuandoMueva(eje); // <- callback
  };

  window.addEventListener("mousemove", actualizarEje);

  return {
    limpiarEvento: () => {
      window.removeEventListener("mousemove", actualizarEje);
    },
  };
};