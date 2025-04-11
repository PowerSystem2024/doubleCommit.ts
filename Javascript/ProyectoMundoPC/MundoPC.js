class Computadora {
  static contadorComputadora = 0

  constructor(nombre, monitor, teclado, raton) {
    this._idComputadora = ++Computadora.contadorComputadora
    this._nombre = nombre
    this._monitor = monitor
    this._teclado = teclado
    this._raton = raton
  }

  get idComputadora() {
    return this.idComputadora
  }

  get nombre() {
    return this._nombre
  }

  set nombre(valor) {
    this._nombre = valor
  }

  get monitor() {
    return this._monitor
  }

  set monitor(valor) {
    this._monitor = valor
  }

  get teclado() {
    return this._teclado
  }

  set teclado(valor) {
    this._teclado = valor
  }

  get raton() {
    return this._raton
  }

  set raton(valor) {
    this._raton = valor
  }

  toString() {
    return `Computadora ${this._idComputadora}: ${this._nombre}
            ${this._monitor.toString()}
            ${this._teclado.toString()}
            ${this._raton.toString()}`
  }
}
class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada
    this._marca = marca
  }

  get tipoEntrada() {
    return this._tipoEntrada
  }

  set tipoEntrada(valor) {
    this._tipoEntrada = valor
  }

  get marca() {
    return this._marca
  }

  set marca(valor) {
    this._marca = valor
  }

  toString() {
    return `Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`
  }
}

export class Teclado extends DispositivoEntrada {
  static contadorTeclado = 0

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca)
    this._idTeclado = ++Teclado.contadorTeclado
  }

  get idTeclado() {
    return this._idTeclado
  }

  toString() {
    return `Teclado ${this._idTeclado}: ${super.toString()}`
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca)
    this._idRaton = ++Raton.contadorRatones
  }

  get idRaton() {
    return this._idRaton
  }

  toString() {
    return `Ratón ${this._idRaton}: ${super.toString()}`
  }
}

class Orden {
  static contadorOrdenes = 0

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes
    this._computadoras = []
  }

  get idOrden() {
    return this._idOrden
  }

  get computadoras() {
    return this._computadoras
  }

  agregarComputadora(computadora) {
    this._computadoras.push(computadora)
  }

  mostrarOrden() {
    console.log(`Orden #${this._idOrden}`)
    this._computadoras.forEach((compu, index) => {
      console.log(`Computadora ${index + 1}: ${compu}`)
    })
  }
}

class Monitor {
  static contadorMonitores = 0

  constructor(marca, tamanio) {
    this._idMonitor = ++Monitor.contadorMonitores
    this._marca = marca
    this._tamanio = tamanio
  }

  get idMonitor() {
    return this._idMonitor
  }

  get tamanio() {
    return this._tamanio
  }

  set tamanio(valor) {
    this._tamanio = valor
  }

  toString() {
    return `Monitor ${this._idMonitor}: Marca: ${this._marca}, Tamaño: ${this._tamanio} pulgadas`
  }
}

const raton1 = new Raton('PS2', 'Genius')
const raton2 = new Raton('USB', 'Logitech')
console.log(raton1.toString())
console.log(raton2.toString())
const teclado1 = new Teclado('USB', 'Genius')
const teclado2 = new Teclado('WIRELESS', 'Keychrone')
console.log(teclado1.toString())
console.log(teclado2.toString())
const monitor1 = new Monitor('BeenQ', 19)
const monitor2 = new Monitor('Samsung', 24)
console.log(monitor1.toString())
console.log(monitor2.toString())
const computadora1 = new Computadora(
  'PC escritorio',
  monitor1,
  teclado1,
  raton1
)
const computadora2 = new Computadora('HP', monitor2, teclado2, raton2)
console.log(computadora1.toString())
console.log(computadora2.toString())

const orden1 = new Orden()
orden1.agregarComputadora(computadora1)
orden1.agregarComputadora(computadora2)
orden1.mostrarOrden()
