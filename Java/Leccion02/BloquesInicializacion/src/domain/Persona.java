package domain;


public class Persona {
    private final int idPersona;
    private static int contadorPersonas;
    
    
    static{ //Bloque de inicialización estático
        System.out.println("Ejecución del bloque estático");
        ++Persona.contadorPersonas;
        //idPersona = 20; No es un atributo estatico por esto tenemos un error
    }
    
    
}
