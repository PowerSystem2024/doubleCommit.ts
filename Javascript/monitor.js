class Monitor extends DispositivoSalida {
    static contadorMonitores = 0;

    constructor(tipoSalida, marca, tamanio) {
        super(tipoSalida, marca);
        this._tamanio = tamanio;
        this._idMonitor = ++Monitor.contadorMonitores;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    get tamanio() {
        return this._tamanio;
    }

    set tamanio(valor) {
        this._tamanio = valor;
    }

    toString() {
        return `Monitor ${this._idMonitor}: ${super.toString()}, Tamaño: ${this._tamanio}"`;
    }
}
