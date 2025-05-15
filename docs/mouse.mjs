export const escucharMovimientoMouse = (cuandoMueva) => {
    const actualizarEje = (event) => {
      const eje = { x: event.clientX, y: event.clientY };
      cuandoMueva(eje);
    };
  
    window.addEventListener("mousemove", actualizarEje);
  
    return {
      limpiarEvento: () => {
        window.removeEventListener("mousemove", actualizarEje);
      }
    };
  };
  