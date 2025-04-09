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
                ${this._raton.toString()}`;
    }

}