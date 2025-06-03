package paquete2;

public class Clase4 {
    private String atributoPrivate = "atributo privado";
    
    private Clase4() {
        System.out.println("Constructor Privado");
    }
    
    // Creamos un constructor public para poder crear objetos
    public Clase4(String argumento) { // Aquí se puede llamar al constructor vacío
        this();
        System.out.println("argumento = " + argumento);
    }
    
    private void metodoPrivado() {
        System.out.println("Método Privado");
    }

    public String getAtributoPrivate() {
        return this.atributoPrivate;
    }

    public void setAtributoPrivate(String atributoPrivate) {
        this.atributoPrivate = atributoPrivate;
    }
    
    
}
