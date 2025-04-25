package paquete1;

public class Clase1 {
    public String atributoPublic = "Valor atributo public";
    protected String atributoProtected = "Valor atributo protected";
    
    public Clase1() {
        System.out.println("Constructor public");
    }
    
    protected Clase1(String atributoProtected){
        System.out.println("Constructor protected");
    }
    
    public void metodoPublico() {
        System.out.println("Método public");
    }
    
    protected void metodoPrtected() {
        System.out.println("Método protected");
    }
}
