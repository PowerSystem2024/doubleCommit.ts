import { abrirDialogo } from "./utils/dialog.mjs";
import { escucharMovimientoMouse } from "./utils/mouse.mjs";

// En cuanto cargue el DOM se ejecuta todo
onload = () => {
  // Variables para manipular el DOM
  const ventana = document.getElementById("ventana");
  const botonCerrarVentana = document.getElementById("btnX");
  const resultadoJuego = document.getElementById("resultado");
  const ie = document.getElementById("ie");
  const inico = document.getElementById("inicio");
  const menuInicio = document.getElementById("menu-inicio");
  const opcionBoton = {
    iconoAplicacion: document.getElementById("btnApp"),
    piedra: document.getElementById("btn1"),
    papel: document.getElementById("btn2"),
    tijera: document.getElementById("btn3"),
    reiniciar: document.getElementById("reiniciar"),
    reiniciarCompleto: document.getElementById("reiniciarTodo"),
  };
  const puntos = {
    jugador: document.getElementById("pJugador"),
    pc: document.getElementById("pPC"),
  };
  const reloj = document.getElementById("reloj");

  let puntosJugador = 0;
  let puntosPC = 0;

  /** Abre ventana de la aplicación
   * @returns {void}
   */
  const abrirVentana = () => {
    ventana.style.display = "block";
  };
  /** Cierra la ventana de la aplicación
   * @returns {void}
   */
  const cerrarVentana = () => {
    ventana.style.display = "none";
  };
  /**
   * Método para arrastrar ventanas en el DOM según su posición en el eje { x, y }
   * @param {Element} ventana
   * @returns {MouseEvent}
   */
  const arrastrarVentana = (ventana) => {
    let offset = { x: 0, y: 0 };
    let limpiarMovimiento = null;

    const manejarMouseDown = (event) => {
      // Calcula la distancia del cursor respecto al borde superior izquierdo del div
      const rect = ventana.getBoundingClientRect();

      offset = {
        x: event.clientX - rect.left / 2,
        y: event.clientY - rect.top / 2,
      };

      // Empieza a escuchar el movimiento del mouse
      const { limpiarEvento } = escucharMovimientoMouse((pos) => {
        ventana.style.left = `${pos.x - offset.x}px`;
        ventana.style.top = `${pos.y - offset.y}px`;
        ventana.style.cursor = "move";
      });

      limpiarMovimiento = limpiarEvento;

      // Deja de mover cuando se suelta el mouse
      window.addEventListener("mouseup", manejarMouseUp);
    };

    const manejarMouseUp = () => {
      if (limpiarMovimiento) limpiarMovimiento();
      ventana.style.cursor = "default";
      window.removeEventListener("mouseup", manejarMouseUp);
    };

    ventana.addEventListener("mousedown", manejarMouseDown);
  };

  /**
   * Método que retorna un string de acuerdo a la condición de la opción
   * @param {number} opcion
   * @returns {string}
   */
  function eleccion(opcion) {
    if (opcion == 1) return "✊ Piedra";
    if (opcion == 2) return "✋ Papel";
    if (opcion == 3) return "✌️ Tijera";
  }

  /**
   * Función para randomizar entre dos valores pasados en los parámetros
   * @param {number} min
   * @param {number} max
   * @returns Número aleatorio
   */
  function random(min, max) {
    return Math.floor(Math.random() * max) + min;
  }
  /**
   *
   * @param {number} jugador
   * Inicia el juego y evalúa las condiciones de juego
   */
  function jugar(jugador) {
    const pc = random(1, 3);
    let resultado = `Vos elegiste: ${eleccion(jugador)}<br>`;
    resultado += `La PC eligió: ${eleccion(pc)}<br><br>`;

    if (jugador === pc) {
      abrirDialogo("🔥 EMPATE");
    } else if (
      (jugador === 1 && pc === 3) ||
      (jugador === 2 && pc === 1) ||
      (jugador === 3 && pc === 2)
    ) {
      abrirDialogo("🎉 ¡GANASTE!");
      puntosJugador++;
    } else {
      abrirDialogo("💀 PERDISTE");
      puntosPC++;
    }

    resultadoJuego.innerHTML = resultado;
    puntos.jugador.textContent = puntosJugador;
    puntos.pc.textContent = puntosPC;
    desactivarBotones();
  }

  function desactivarBotones() {
    opcionBoton.piedra.disabled = true;
    opcionBoton.papel.disabled = true;
    opcionBoton.tijera.disabled = true;
  }
  /**
   * Función para obtener elementos del DOM y habilitar los botones del juego
   */
  function habilitarBotones() {
    opcionBoton.piedra.disabled = false;
    opcionBoton.papel.disabled = false;
    opcionBoton.tijera.disabled = false;
    resultado.innerHTML = "Haga clic en un botón para jugar...";
  }
  /**
   * Función para jugar otra ronda
   */
  function jugarOtraRonda() {
    habilitarBotones();
  }
  /**
   * Función que reinicia el juego, resetea los valores y vuelve a habilitar los botones
   */
  function reiniciarTodo() {
    puntosJugador = 0;
    puntosPC = 0;
    puntos.jugador.textContent = "0";
    puntos.pc.textContent = "0";
    habilitarBotones();
  }

  // Actividad botón inicio
  const manejarBotonInicio = () => {    
    if (!menuInicio.checkVisibility()) {
      menuInicio.style.display = "flex";
    } else {
      menuInicio.style.display = "none";
    }
  };

  const crearVentanaNavegador = () => {
    // Crear wrapper principal
    const inputURL = location.href.split("address=");
    const direccionURL = inputURL[1];
    const url = direccionURL
      ? decodeURIComponent(direccionURL)
      : "https://neo-wifi.vercel.app";
   
    const wrapper = document.createElement("div");
    wrapper.className = "navegador-wrapper";
    wrapper.id = "navegador-wrapper";

    // Crear barra superior estilo navegador
    const barra = document.createElement("div");
    const mneuNav = document.createElement("div");
    barra.className = "navegador-barra";
    mneuNav.className = "menu-navegador";
    barra.innerHTML = `
      <span style="display: flex; align-items: center; gap: 4px;">
      <img src="https://win98icons.alexmeub.com/icons/png/html2-2.png" width="20" height="20" />
      Neo-WiFi - Microsoft Internet Explorer</span>
      <div class="navegador-botones">
        <div class="navegador-boton" id="cerrarBtn"></div>
      </div>
    `;
    mneuNav.innerHTML = `
    <form style="display: flex; align-items: center; background-color: #c0c0c0; padding: 4px; border: 2px inset #fff; font-family: 'MS Sans Serif', sans-serif;">
      <label style="margin-right: 8px;">Address:</label>
      <div style="display: flex; align-items: center; background-color: #fff; border: 2px inset #808080; padding: 2px; flex: 1;">
      <img src="https://win98icons.alexmeub.com/icons/png/html2-2.png" width="20" height="20" style="margin-right: 4px;" />
      <input
      type="text"
      name="address"
      value="${url}"
      style="flex: 1; border: none; outline: none; font-size: 12px; font-family: 'MS Sans Serif', sans-serif; background-color: #fff;"
      />
      </div>
      <button type="submit" style="
        margin-left: 8px;
        padding: 2px 12px;
        background-color: #c0c0c0;
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #808080;
        border-right: 2px solid #808080;
        font-size: 12px;
        font-family: 'MS Sans Serif', sans-serif;
        cursor: pointer;
      ">
        Go
      </button>
    </form>
    `;

    // Crear iframe
    const iframe = document.createElement("iframe");
    iframe.className = "navegador-iframe";
    iframe.src = url;

    // Agregar al DOM
    wrapper.appendChild(barra);
    wrapper.appendChild(mneuNav);
    wrapper.appendChild(iframe);
    document.body.appendChild(wrapper);
    arrastrarVentana(wrapper);

    // Cerrar al hacer click en el botón
    barra.querySelector("#cerrarBtn").textContent = "X";
    barra.querySelector("#cerrarBtn").addEventListener("click", () => {
      wrapper.remove();
    });
  };

  const manejarEventosBotones = () => {
    opcionBoton.iconoAplicacion.addEventListener("dblclick", () => {
      abrirVentana();
    });
    botonCerrarVentana.onclick = () => {
      cerrarVentana();
    };
    opcionBoton.piedra.onclick = () => {
      jugar(1);
    };
    opcionBoton.papel.onclick = () => {
      jugar(2);
    };
    opcionBoton.tijera.onclick = () => {
      jugar(3);
    };
    opcionBoton.reiniciar.onclick = () => {
      jugarOtraRonda();
    };
    opcionBoton.reiniciarCompleto.onclick = () => {
      reiniciarTodo();
    };
    ie.addEventListener("dblclick", () => {
      crearVentanaNavegador();
    });
    inico.onclick = () => {
      manejarBotonInicio();
    };
  };

  const worker = new Worker(
    new URL("./worker/clock-worker.js", import.meta.url)
  );
  worker.postMessage(1000);
  worker.onmessage = (event) => {
    reloj.textContent = event.data;
  };
  arrastrarVentana(ventana);
  manejarEventosBotones();
};
