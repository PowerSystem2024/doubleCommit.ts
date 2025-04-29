'use strict';
// Veamos como evitarlo
try {
  x = 10;
  // miFuncion();

  throw new Error('Mi Error');
} catch (error) {
  // Cachamos el error
  console.error(error);
} finally {
  console.log('Termina la revsión de errores');
}

// La ejecucuión ahora continúa
console.log('Continuamos...'); //Esto no se llega a ver porque está bloqueado cuando hay error

let resultado = '';

try {
  // y = 5
  if (isNaN(resultado)) throw 'No es un número'; // Maneja tipo string
  else if (resultado === '') throw 'Es una cadena vacía';
  else if (resultado >= 0) throw 'Valor positivo';
  else if (resultado <= 0) throw 'Valor negativo';
} catch (error) {
  console.log(error);
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log('Termina la revisión de errores');
}
