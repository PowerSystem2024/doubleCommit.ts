package paquete2;

import paquete1.Clase1;

public class Clase3 extends Clase1 {
    public Clase3() {
        super("protected");
        this.atributoProtected = "Acceso dese la clase hija";
        System.out.println("Atributo Protected = " + this.atributoProtected);
        this.atributoPublic = "es totalmente público";
    }
}
