class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    get computadoras() {
        return this._computadoras;
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        console.log(`Orden #${this._idOrden}`);
        this._computadoras.forEach((compu, index) => {
            console.log(`Computadora ${index + 1}: ${compu}`);
        });
    }
}