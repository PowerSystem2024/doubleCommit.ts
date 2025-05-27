class Empleado {
  constructor(nombre, sueldo) {
    this._nombre = nombre;
    this._sueldo = sueldo;
  }

  get() {
    return this._nombre;
  }

  set(nombre) {
    this._nombre = nombre;
  }

  obtenerDetalles() {
    return `Empleado: ${this._nombre}
          Sueldo: ${this._sueldo}
          `;
  }
}

class Gerente extends Empleado {
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo);
    this._departamento = departamento;
  }

  obtenerDetalles() {
    return `Gerente: ${super.obtenerDetalles()},
            Depto: ${this._departamento}`;
  }
}

function imprimir(tipo) {
  console.log(tipo.obtenerDetalles());
  if (tipo instanceof Gerente) {
    console.log('Es un objeto de tipo Gerente');
    console.log(tipo._departamento);
  } else if (tipo instanceof Empleado) {
    console.log('Es un objeto de tipo Empleado');
    console.log(tipo._nombre);
  } else if (tipo instanceof Object) {
    // El orden siempre es jerárquico
    console.log('Es de tipo Object'); // Clase padre de todas las clases
  }
}

const gerente1 = new Gerente('Gabriel', 6000000, 'Sistemas');
console.log(gerente1);
const empleado1 = new Empleado('Mario', 1300000);
console.log(empleado1);

imprimir(gerente1);
imprimir(empleado1);
