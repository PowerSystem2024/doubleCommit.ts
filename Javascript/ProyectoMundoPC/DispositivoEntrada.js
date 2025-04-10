class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(valor) {
        this._tipoEntrada = valor;
    }

    get marca() {
        return this._marca;
    }

    set marca(valor) {
        this._marca = valor;
    }

    toString() {
        return `Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}
