
package mundopc;

import ar.com.system2024.mundopc.Monitor;
import ar.com.system2024.mundopc.Teclado;
import ar.com.system2024.mundopc.Raton;
import ar.com.system2024.mundopc.Computadora;
import ar.com.system2024.mundopc.Orden;

public class MundoPc {
    public static void main(String[] args) {
        Monitor monitorBenq = new Monitor("BenQ", 19);
        Teclado tecladoGenius = new Teclado("USB", "Genius");
        Raton ratonGenius = new Raton("USB", "Genius");
        
        Monitor monitorCompaq = new Monitor("Compaq", 15);
        Teclado tecladoCompaq = new Teclado("PS2", "Compaq");
        Raton ratonCompaq = new Raton("PS2", "Compaq");
        
        Monitor monitorHP = new Monitor("HP", 24);
        Teclado tecladoHP = new Teclado("USB", "HP");
        Raton ratonHP = new Raton("USB", "HP");
        
        Monitor monitorLenovo = new Monitor("Lenovo", 24);
        Teclado tecladoLenovo = new Teclado("USB", "Lenovo");
        Raton ratonLenovo = new Raton("USB", "Lenovo");
        
        Computadora computadoraGenerica = new Computadora("Genérica", monitorBenq, tecladoGenius, ratonGenius);
        Computadora computadoraCompaq = new Computadora("Compaq", monitorCompaq, tecladoCompaq, ratonCompaq);
        Computadora computadoraHP = new Computadora("HP", monitorHP, tecladoHP, ratonHP);
        Computadora computadoraLenovo = new Computadora("Lenovo", monitorLenovo, tecladoLenovo, ratonLenovo);
        
        Orden orden1 = new Orden();
        
        orden1.agregarComputadora(computadoraGenerica);
        orden1.agregarComputadora(computadoraCompaq);
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraLenovo);
        orden1.mostrarOrden();
        
        Monitor monitorAlienWare = new Monitor("AlienWare", 32);
        Teclado teacladoAlienWare = new Teclado("Wireless", "Alien Ware");
        Raton ratonAlienWare = new Raton("Wireles", "Alien Ware");
        
        Computadora computadoraAlienWare = new Computadora("Alien Ware", monitorAlienWare, teacladoAlienWare, ratonAlienWare);
        Orden orden2 = new Orden();
        
        orden2.agregarComputadora(computadoraAlienWare);
        orden2.mostrarOrden();
    }
}
