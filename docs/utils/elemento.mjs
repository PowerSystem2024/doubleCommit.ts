/** Abre ventana del elemento que se le pase como argumento
 * @returns {void}
 */
export const mostrarElemento = (el = HTMLElement) => {
  return el.style.display = "block";
};
/** Cierra la ventana del elemento que recibe en el parámetro
 * @returns {void}
 */
export const cerrarElemento = (el = HTMLElement) => {
  return el.style.display = "none";
};
