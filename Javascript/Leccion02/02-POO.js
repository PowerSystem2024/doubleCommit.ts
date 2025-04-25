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
    retunr`Gerente: ${super.obtenerDetalles()},
        Depto: ${this._departamento}`;
  }
}

const gerente1 = new Gerente('Gabriel', 6000000, 'Sistemas');
console.log(gerente1);
const empleado1 = new Empleado('Mario', 1300000);
console.log(empleado1);
