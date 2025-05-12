package test;

import domain.*;

public class TestConnverisonObjetos {

    public static void main(String[] args) {
        Empleado empleado;
        empleado = new Escritor("Juan", 5200, TipoEscritura.CLASICO);
//        System.out.println("empleado = " + empleado);
//        System.out.println(empleado.obtenerDetalles());
        //empleado.getTipoEscritura(); No se puede hacer, si en el downcasting
        // Downcasting
//        ((Escritor)empleado).getTipoEscritura(); // Tenemos dos opciones esta es una.
//        Escritor escritor = (Escritor)empleado;
//        escritor.getTipoEscritura();        

        // Upcasting
        Empleado empleado2 = escritor;
        System.out.println("empleado2 = " + empleado2.obtenerDetalles());
    }
}
