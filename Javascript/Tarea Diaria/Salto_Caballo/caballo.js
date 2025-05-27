const movimientosCaballo = [
  [2, 1], [1, 2], [-1, 2], [-2, 1],
  [-2, -1], [-1, -2], [1, -2], [2, -1]
];

let N = 8;
let tablero = [];
let delay = 200; // milisegundos entre movimientos
let tableroHTML = null;
let salida = null;

// Dibuja el tablero visualmente
function dibujarTablero(posX = -1, posY = -1) {
  tableroHTML.innerHTML = '';
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

// Verifica si la posición es válida y no visitada
function esValido(x, y) {
  return x >= 0 && y >= 0 && x < N && y < N && tablero[x][y] === -1;
}

// Algoritmo de backtracking
async function resolver(x, y, paso) {
  tablero[x][y] = paso;
  dibujarTablero(x, y);
  await new Promise(r => setTimeout(r, delay));

  if (paso === N * N - 1) {
    salida.textContent = '✅ ¡Tour completado con éxito!';
    return true;
  }

  for (let [dx, dy] of movimientosCaballo) {
    let nx = x + dx;
    let ny = y + dy;
    if (esValido(nx, ny)) {
      if (await resolver(nx, ny, paso + 1)) return true;
    }
  }

  // Retroceso (backtrack)
  tablero[x][y] = -1;
  dibujarTablero();
  await new Promise(r => setTimeout(r, delay));
  return false;
}

function iniciar() {
  tableroHTML = document.getElementById('tablero');
  salida = document.getElementById('salida');

  N = parseInt(document.getElementById('nValor').value);
  if (N < 5) {
    alert("El tamaño mínimo del tablero es 5x5.");
    return;
  }

  // Inicializa el tablero
  tablero = Array.from({ length: N }, () => Array(N).fill(-1));
  salida.textContent = '⏳ Buscando tour...';
  dibujarTablero();

  // Comenzar desde (0, 0)
  resolver(0, 0, 0).then(success => {
    if (!success) salida.textContent = '❌ No se encontró solución.';
  });
}
