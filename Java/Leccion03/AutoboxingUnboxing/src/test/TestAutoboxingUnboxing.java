package test;

public class TestAutoboxingUnboxing {
    public static void main(String[] args) {
        // Clases envolventes o Wrapper
        /*
            Calses envolventes de tipo primitivos
            int = la clase envolvente es Integer
            long = la clase envolvente es Long
            float = la clase envolvente es Float
            double = la clase envolvente es Double
            boolean = la clase envolvente es Boolean
            byte = la calse envolvente es Byte
            char = la calse envolvente es Char
            short = la clase envolvente es Short
        */
        
        int enteroPrim = 10; // tipo primitivo
        System.out.println("enteroPrim = " + enteroPrim);
        Integer entero = 10; // tipo Object con la clase Integer 
        System.out.println("entero = " + entero.doubleValue()); // Autoboxing
        
        int entero2 = entero; // Unboxing
        System.out.println("entero2 = " + entero2);
    }
}
