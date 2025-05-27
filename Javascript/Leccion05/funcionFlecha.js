// Función normal
function miFuncion() {
  console.log('Saludos desde lmi función normal');
}

// Función anónima
const miFuncionAnonima = function () {
  console.log('Saludos desde mi función anónima');
};

// Función flecha
const miFuncionFlecha = () => {
  console.log('Saludos desde mi función flecha');
};

// En una sola línea
const saludar = () => {
  console.log('Saludos desde mi función saludar');
};
const saludar2 = () => {
  console.log('Saludos desde la función flecha 2');
};

miFuncionFlecha();

// console.log(saludar());
const regresaObjetos = () => ({ nombre: 'Pedro', apellido: 'Picapiedras' });
console.log(regresaObjetos());

// Función flecha con parámetros
const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('Saludos desde esta función con parámetros');

const funcionConParametrosClasica = function (mensaje) {
  mensaje;
};

funcionConParametrosClasica('Saludos desde la función clásica');

// Se pueden omitir los paréntesis con la función flecha
const funcionConParametros2 = mensaje => console.log(mensaje);

// Ahora vemos funciones flechas con varios parámetros
const funcionConParametros3 = (op1, op2) => {
  const resultado = op1 + op2
  return resultado
}

console.log(funcionConParametros3(3, 5))