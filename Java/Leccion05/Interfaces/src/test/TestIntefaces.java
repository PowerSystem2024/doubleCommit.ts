
package test;
import accesodatos.*;

public class TestIntefaces {

    public static void main(String[] args) {
        IAccesoDatos datos = new ImplementacionMySql();
        imprimir(datos);
        datos = new ImplementacionOracle(); // Polimorfismo
        imprimir(datos);
    }
    
    public static void imprimir(IAccesoDatos datos) {
        datos.listar();
    }
}
