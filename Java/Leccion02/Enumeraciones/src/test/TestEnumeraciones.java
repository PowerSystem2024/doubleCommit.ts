package test;

import enumeraciones.Dias;
import enumeraciones.Continentes;

public class TestEnumeraciones {
    public static void main(String[] args){
     //       System.out.println("Dia 1: "+Dias.LUNES);
       //     indicarDiasSemana(Dias.DOMINGO); //Las enueraciones se tratan como cadenas
            //ahora no se deben utilizar comillas, se accede a través de el operador de punto
        System.out.println("Continente Nro. 1"+Continentes.AFRICA);
        System.out.println("No. habitantes en el 1to. continentes: "
                +Continentes.AFRICA.getHabitantes());
        System.out.println("Continente Nro. 2"+Continentes.EUROPA);
        System.out.println("No. habitantes en el 2to. continentes: "
                +Continentes.EUROPA.getHabitantes());
        System.out.println("Continente Nro. 3"+Continentes.ASIA);
        System.out.println("No. habitantes en el 4to. continentes: "
                +Continentes.ASIA.getHabitantes());               
        System.out.println("Continente Nro. 4"+Continentes.AMERICA);
        System.out.println("No. habitantes en el 4to. continentes: "
                +Continentes.AMERICA.getHabitantes());
        System.out.println("Continente Nro. 5"+Continentes.OCEANIA);
        System.out.println("No. habitantes en el 4to. continentes: "
                +Continentes.OCEANIA.getHabitantes());
    }
    
    
    private static void indicarDiasSemana(Dias dias){
        switch(dias){
            case LUNES:
                System.out.println("Primer día de la semana");
                break;
            case MARTES:
                System.out.println("Segundo día de la semana");
                break;
            case MIERCOLES:
                System.out.println("Tercer día de la semana");
                break;
            case JUEVES:
                System.out.println("Cuarto día de la semana");
                break;
            case VIERNES:
                System.out.println("Quinto día de la semana");
                break;
            case SABADO:
                System.out.println("Sexto día de la semana");
                break;
            case DOMINGO:
                System.out.println("Septimo día de la semana");
                break;
                
            default:
                System.out.println("Día no reconocido");
            
        }
    }
    
}
