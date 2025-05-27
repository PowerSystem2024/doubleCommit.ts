package domain;


public class Persona {
    private final int idPersona;
    private static int contadorPersonas;
    
    
    static{ //Bloque de inicialización estático
        System.out.println("Ejecución del bloque estático");
        ++Persona.contadorPersonas; //si colocamos" ++contadorPersonas " funciona igualmente
        //idPersona = 20; No es un atributo estatico por esto tenemos un error
    }
    
    {//Bloque de inicialización NO estatico (contexto dinámico)
        System.out.println("Ejecución del bloque NO estático");
        this.idPersona = Persona.contadorPersonas++; //incrementador del atributo
               
    }
    
   
    //Los bloques de inicialización se ejecutan antes del constructor
    public Persona(){
        System.out.println("Ejecución de constructor");
    }
    
    public int getIdPersona(){
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
}
