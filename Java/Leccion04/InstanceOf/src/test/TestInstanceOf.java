package test;

import domain.Gerente;
import domain.Empleado;

public class TestInstanceOf {

    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 10000);
        determinarTipo(empleado1);
        empleado1 = new Gerente("José", 50000, "Sistema");
        //determinarTipo(empleado1);
    }

    // Polimorfismo
    public static void determinarTipo(Empleado empleado) {
        if (empleado instanceof Gerente) {
            System.out.println("Es de tipo Gerente");
            //Gerente gerente = (Gerente)empleado;
            //System.out.println("gerente = " + gerente.getDepartamento());
        } else if (empleado instanceof Empleado) {
            System.out.println("Es de tipo Empleado");
        } else if (empleado instanceof Object) {
            System.out.println("Es de tipo Obejto");
        }
    }
}
