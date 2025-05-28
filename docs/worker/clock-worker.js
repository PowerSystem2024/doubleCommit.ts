onmessage = (event) => {
  const tiempo = event.data;
  const reloj = () => {
    const fecha = new Date();
    const hora = fecha.getHours().toString().padStart(2, "0")
    const minutos = fecha.getMinutes().toString().padStart(2, "0")
    // const segundos = fecha.getSeconds().toString().padStart(2, "0")
    const ampm = hora >= 12 ? "PM" : "AM"
    return `${hora}:${minutos} ${ampm}`;
  };
  setInterval(() => {
    postMessage(reloj())
  }, tiempo)
};
