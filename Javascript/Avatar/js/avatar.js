onload = () => {
  let ataqueJugador;
  let ataqueEnemigo;
  let vidasJugador = 3;
  let vidasEnemigo = 3;
  let personajeSeleccionado = "";
  const botonPersonajeJugador = document.getElementById("boton-personaje");
  const nombreJugador = document.getElementById("nombre-jugador");
  const nombreEnemigo = document.getElementById("nombre-enemigo");
  const botonPunio = document.getElementById("boton-punio");
  const botonPatada = document.getElementById("boton-patada");
  const botonBarrida = document.getElementById("boton-barrida");
  const botonReiniciar = document.getElementById("reiniciar")
  const personajes = ["Zuko 🔥", "Katara 💧", "Aang 🌬️", "Toph 🌍"];
  let personajeEnemigo =
    personajes[Math.floor(Math.random() * personajes.length)];
  const aletarorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const reglasDelJuego = document.getElementById("reglas")
  const botonReglas = document.getElementById("ver-reglas")
  const cerrarReglas = document.getElementById("cerrar-reglas")

  reglasDelJuego.style.display = "none"
  botonReglas.onclick = () => {
    if (reglasDelJuego) {
      reglasDelJuego.style.display = "flex"
    }
  }

  cerrarReglas.onclick = () => {
    reglasDelJuego.style.display = "none"
  }

  function seleccionarPersonajeJugador() {
    const zuko = document.getElementById("zuko");
    const katara = document.getElementById("katara");
    const aang = document.getElementById("aang");
    const toph = document.getElementById("toph");

    const imagenes = {
      "Zuko 🔥": "/Javascript/Avatar/public/avatar-zuko.webp",
      "Katara 💧": "/Javascript/Avatar/public/images.jpg",
      "Aang 🌬️": "/Javascript/Avatar/public/images (1).jpg",
      "Toph 🌍": "/Javascript/Avatar/public/Toph_Beifong.webp",
    };

    if (zuko.checked) {
      personajeSeleccionado = "Zuko 🔥";
      // mostrarPersonaje("Zuko🔥");
    } else if (katara.checked) {
      personajeSeleccionado = "Katara 💧";
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

    // Asegurarse de que el enemigo no sea el mismo que el jugador
    if (personajeEnemigo === personajeSeleccionado) {
      personajeEnemigo =
        personajes[Math.floor(Math.random() * personajes.length)];
    }

    // Mostrar sección personaje-vs-enemigo
    document.getElementById("vs-nombre-jugador").innerText =
      personajeSeleccionado;
    document.getElementById("vs-img-jugador").src =
      imagenes[personajeSeleccionado];
    document.getElementById("vs-nombre-enemigo").innerText = personajeEnemigo;
    document.getElementById("vs-img-enemigo").src = imagenes[personajeEnemigo];
    document.getElementById("personajes-vs-enemigo").style.display = "block";

    nombreJugador.textContent = `Tú personaje ${personajeSeleccionado} tiene ${vidasJugador} vidas`;
    nombreEnemigo.textContent = `El enemigo ${personajeEnemigo} tiene ${vidasEnemigo} vidas`;
  }

  function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aletarorio(1, 3);
    if (ataqueAleatorio === 1) {
      ataqueEnemigo = "Puño 👊";
    } else if (ataqueAleatorio === 2) {
      ataqueEnemigo = "Patada 🦵";
    } else {
      ataqueEnemigo = "Barrida 🦶";
    }
    return ataqueAleatorio;
  }

  function ataquePunio() {
    ataqueJugador = "Puño 👊";
    combate(personajeEnemigo, personajeSeleccionado);
  }

  function ataquePatada() {
    ataqueJugador = "Patada 🦵";
    combate(personajeEnemigo, personajeSeleccionado);
  }

  function ataqueBarrida() {
    ataqueJugador = "Barrida 🦶";
    combate(personajeEnemigo, personajeSeleccionado);
  }

  // Evento de click en los botones de combate
  botonPersonajeJugador.onclick = () => seleccionarPersonajeJugador()
  botonPunio.onclick = () => ataquePunio();
  botonPatada.onclick = () => ataquePatada();
  botonBarrida.onclick = () => ataqueBarrida();
  botonReiniciar.onclick = () => window.location.reload()

  /**
   * Función para mostrar un dialogo
   * @returns {void}
   */
  const crearDialogo = (contenido = "") => {
    const dialogo = document.createElement("dialog");
    document.body.appendChild(dialogo);
    dialogo.innerHTML = `
    <div>
        <header>
            <p>Resultado</p>
            <span title="Cerrar diálogo">X</span>
        </header>
        <p style="padding: 24px">${contenido}</p>
    </div>
    `;
    dialogo.showModal();
    cerrarDialogo();
  };

  /**
   * Cerrar dialogo y evitar re-renderizado, se puede cerrar haciendo click fuera.
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
  // Función de combate
  function combate() {
    nombreJugador.textContent = personajeSeleccionado;
    nombreEnemigo.textContent = personajeEnemigo;

    ataqueAleatorioEnemigo();
    if (vidasEnemigo > 0 && vidasJugador > 0) {
      if (ataqueEnemigo === ataqueJugador) {
        crearDialogo(`${personajeSeleccionado} a empatado ésta ronda con ${personajeEnemigo}`);
        nombreJugador.textContent = `${personajeSeleccionado} tiene ${vidasJugador} vidas`;
        nombreEnemigo.textContent = `${personajeEnemigo} tiene ${vidasEnemigo} vidas`;
      } else if (
        (ataqueJugador === "Puño 👊" && ataqueEnemigo === "Barrida 🦶") ||
        (ataqueJugador === "Barrida 🦶" && ataqueEnemigo === "Patada 🦵") ||
        (ataqueJugador === "Patada 🦵" && ataqueEnemigo === "Puño 👊")
      ) {
        crearDialogo(`${personajeSeleccionado} gana la ronda!`);
        vidasEnemigo--;
        nombreJugador.textContent = `${personajeSeleccionado} tiene ${vidasJugador} vidas`;
        nombreEnemigo.textContent = `${personajeEnemigo} tiene ${vidasEnemigo} vidas`;
      } else {
        crearDialogo(`${personajeEnemigo} le ha ganado a ${personajeSeleccionado}. Pierdes una vida en ésta ronda!`);
        vidasJugador--;
        nombreJugador.textContent = `${personajeSeleccionado} tiene ${vidasJugador} vidas`;
        nombreEnemigo.textContent = `${personajeEnemigo} tiene ${vidasEnemigo} vidas`;
      }
    } else {
      alert("Terminó el juego");
      window.location.reload();
    }
  }
};
