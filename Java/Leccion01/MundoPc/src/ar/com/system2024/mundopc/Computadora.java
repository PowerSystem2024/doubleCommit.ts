package ar.com.system2024.mundopc;

public class Computadora {
    private final int idComputadora;
    private static int contadorComputadoras;
    private String marca;
    private String monitor;
    private String teclado;
    private String raton;
    
    public Computadora(String marca, String monitor, String tecaldo, String raton) {
        this.idComputadora = ++Computadora.contadorComputadoras;
        this.marca = marca;
        this.monitor = monitor;
    }
    
}
