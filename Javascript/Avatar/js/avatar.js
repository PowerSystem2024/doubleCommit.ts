onload = () => {
  let ataquejugador;
  let ataqueEnemigo;
  let botonPersonajeJugador = document.getElementById("boton-personaje");
  botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);

  let botonPunio = document.getElementById("boton-punio");
  botonPunio.addEventListener("click", ataquepunio);
  let botonPatada = document.getElementById("boton-patada");
  botonPatada.addEventListener("click", ataquePatada);
  let botonBarrida = document.getElementById("boton-barrida");
  botonBarrida.addEventListener("click", ataqueBarrida);

  const aletarorio = (min, max) => {
    return Math.floor(Math.random() * min) + max;
  };

  function seleccionarPersonajeJugador() {
    const zuko = document.getElementById("zuko");
    const katara = document.getElementById("katara");
    const aang = document.getElementById("aang");
    const toph = document.getElementById("toph");

    const imagenes = {
      "Zuko🔥": "/Javascript/Avatar/public/avatar-zuko.webp",
      "Katara💧": "/Javascript/Avatar/public/images.jpg",
      "Aang 🌬️": "/Javascript/Avatar/public/images (1).jpg",
      "Toph 🌍": "/Javascript/Avatar/public/Toph_Beifong.webp",
    };

    // Seleccion de personaje enemigo random
    const personajes = ["Zuko🔥", "Katara💧", "Aang 🌬️", "Toph 🌍"];

    // funcion para mostrar un alert con el personaje o enemigo elegido
    function mostrarPersonaje(text = "") {
      alert(text);
    }

    let personajeSeleccionado = "";

    if (zuko.checked) {
      personajeSeleccionado = "Zuko🔥";
      // mostrarPersonaje("Zuko🔥");
    } else if (katara.checked) {
      personajeSeleccionado = "Katara💧";
      // mostrarPersonaje("Katara💧");
    } else if (aang.checked) {
      personajeSeleccionado = "Aang 🌬️";
      // mostrarPersonaje("Aang 🌬️");
    } else if (toph.checked) {
      personajeSeleccionado = "Toph 🌍";
      // mostrarPersonaje("Toph 🌍");
    } else {
      alert("Por favor selecciona un personaje.");
      return;
    }

    // Elegir personaje enemigo aleatorio
    const personajeEnemigo =
      personajes[Math.floor(Math.random() * personajes.length)];

    // Asegurarse de que el enemigo no sea el mismo que el jugador
    while (personajeEnemigo === personajeSeleccionado) {
      personajeEnemigo =
        personajes[Math.floor(Math.random() * personajes.length)];
    }

    // Mostrar personaje jugador y enemigo
    document.getElementById("nombre-jugador").innerText =
      "Tu personaje es " + personajeSeleccionado + " tiene 3 vidas";
    document.getElementById("nombre-enemigo").innerText =
      "Tu enemigo es " + personajeEnemigo + " tiene 3 vidas";

    // Mostrar sección personaje-vs-enemigo
    document.getElementById("vs-nombre-jugador").innerText =
      personajeSeleccionado;
    document.getElementById("vs-img-jugador").src =
      imagenes[personajeSeleccionado];
    document.getElementById("vs-nombre-enemigo").innerText = personajeEnemigo;
    document.getElementById("vs-img-enemigo").src = imagenes[personajeEnemigo];
    document.getElementById("personajes-vs-enemigo").style.display = "block";

    // mostrarPersonaje(`Tu personaje es ${personajeSeleccionado}`);
    // mostrarPersonaje(`Tu enemigo es ${personajeEnemigo}`);
  }

  function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aletarorio(1, 3);

    if (ataqueAleatorio === 1) {
      ataqueEnemigo = "Puño 👊"
    } else if (ataqueAleatorio === 2) {
      ataqueEnemigo = "Patada 🦵"
    } else {
      ataqueEnemigo = "Barrida 🦶"
    }
  }

  function ataquepunio() {
    ataquejugador = "punio";
    ataqueAleatorioEnemigo();
  }

  function ataquePatada() {
    ataquejugador = "patada";
    ataqueAleatorioEnemigo();
  }
  function ataqueBarrida() {
    ataquejugador = "barrida";
    ataqueAleatorioEnemigo();
  }
};
