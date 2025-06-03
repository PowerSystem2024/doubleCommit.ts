package enumeraciones;


public enum Continentes {
    
    AFRICA(53, "1.2 billones"),
    EUROPA(46, "1.8 billones"),
    ASIA(44, "1.9 billones"),
    AMERICA(34, "1.5 billones"),
    OCEANIA(15, "1.4 billones");
    
    private final int paises;
    private final String habitantes;
    
    Continentes(int paises, String habitantes){
        this.paises = paises;
        this.habitantes = habitantes;
    }
    
    //Metodo Get
    public int getPaises(){
        return this.paises;
    }
    
    public String getHabitantes(){
        return this.habitantes;
        
    }
}
