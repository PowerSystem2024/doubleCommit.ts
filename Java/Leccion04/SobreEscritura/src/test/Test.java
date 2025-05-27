package test;

import domain.Gerente;
import domain.Empleado;


public class Test {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 10000);
        imprimir(empleado1);
//        System.out.println("empleado = " + empleado1.obtenerDetalles());
        empleado1 = new Gerente("José", 50000, "Sistema");
        
//        System.out.println("gerente = " + gerente1.obtenerDetalles());
        imprimir(empleado1);
    }
    
    // Polimorfismo
    public static void imprimir(Empleado empleado) {
        String detalles = empleado.obtenerDetalles();
        System.out.println("detalles = " + detalles);
    }
}
