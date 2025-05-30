/**
 * movimientosCaballo: Representa los 8 movimientos posibles del caballo en el tablero. 
 * Cada movimiento es un par de coordenadas [x, y] 
 * que indica cómo se mueve el caballo en términos de filas y columnas.
 * En otra forma este array contiene todos los movimientos en L del caballo.
 */
const movimientosCaballo = [
  [2, 1], [1, 2], [-1, 2], [-2, 1],
  [-2, -1], [-1, -2], [1, -2], [2, -1]
];
const reiniciar = document.getElementById("reiniciar")

let N = 8;
let tablero = [];
let delay = 200; // milisegundos entre movimientos
let tableroHTML = null;
let salida = null;

/**
 * Esta función actualiza la representación visual del tablero en el navegador.
 * posX y posY: Coordenadas actuales del caballo.
 * Cada celda contiene -1 si no ha sido visitada.
 * @param {*} posX posición en el eje X
 * @param {*} posY posición en el eje Y
 */
function dibujarTablero(posX = -1, posY = -1) {
  tableroHTML.innerHTML = ''; // Limpia el tablero antes de empezar
  tableroHTML.style.gridTemplateColumns = `repeat(${N}, 50px)`;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const celda = document.createElement('div');
      celda.className = 'celda ' + ((i + j) % 2 === 0 ? 'blanca' : 'gris');
      if (i === posX && j === posY) {
        celda.classList.add('caballo');
        celda.textContent = '♞';
      } else if (tablero[i][j] !== -1) {
        celda.textContent = tablero[i][j];
      }
      tableroHTML.appendChild(celda);
    }
  }
}

/**
 * Verifica si una posición (x, y) es válida para que el caballo se mueva allí.
 * La posición debe estar dentro de los límites del tablero: `(x >= 0 && y >= 0 && x < N && y < N)`.
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */
function esValido(x, y) {
  return x >= 0 && y >= 0 && x < N && y < N && tablero[x][y] === -1;
}

/**
 * Implementa el algoritmo de backtracking para encontrar el recorrido del caballo.
 * @param {*} x coordenada x actual del caballo.
 * @param {*} y coordenada y actual del caballo.
 * @param {*} paso Número del paso actual en el recorrido
 * @returns 
 */
async function resolver(x, y, paso) {
  tablero[x][y] = paso; // Marca la celda actual como visitada
  dibujarTablero(x, y); // Actualiza el tablero visualmente
  await new Promise(resolve => setTimeout(resolve, delay));

  if (paso === N * N - 1) { // Si el número de pasos es igual al total de celdas `N * N -1` el recorrido está completo
    salida.textContent = '✅ ¡Tour completado con éxito!';
    return true;
  }
  // Intenta mover el caballo a las 8 posiciones posibles
  for (let [dx, dy] of movimientosCaballo) {
    let nx = x + dx;
    let ny = y + dy;
    // Si la posición es válida llama a la función recursivamente a resolver con el siguiente paso
    if (esValido(nx, ny)) {
      if (await resolver(nx, ny, paso + 1)) return true; // Si la llamada recursiva devuleve `true`, el recorrido termina
    }
  }
  // Si no se encuentra solución desde la posición actual, realiza un retroceso
  // Retroceso (backtrack)
  tablero[x][y] = -1; // Marca la celda como no visitada
  dibujarTablero(); // Actualiza el tablero visualmente
  await new Promise(r => setTimeout(r, delay));
  return false; // Devuleve false si no encuentra la solución
}

/**
 * Esta función inicializa el tablero y comienza el algoritmo.
 * Obtiene referencias a los elementos HTML del DOM.
 * Crea el tablero como una matriz de N * N con todas las celdas inicializadas en -1.
 * @returns 
 */
function iniciar() {
  tableroHTML = document.getElementById('tablero');
  salida = document.getElementById('salida');

  N = parseInt(document.getElementById('nValor').value);
  if (N < 5) {
    alert("El tamaño mínimo del tablero es 5x5.");
    return;
  }
  // Creación del tablero
  tablero = Array.from({ length: N }, () => Array(N).fill(-1));
  salida.textContent = '⏳ Buscando tour...';
  dibujarTablero();

  // Comenzar desde (0, 0)
  resolver(0, 0, 0).then(success => {
    if (!success) salida.textContent = '❌ No se encontró solución.';
  });
}

reiniciar.addEventListener("click", () => {
  window.location.reload()
})

