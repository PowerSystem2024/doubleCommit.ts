import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("****** Aplicación Calculadora ******");
        // Mostramos el menú
        System.out.println("""
                1. Suma
                2. Resta
                3. Multiplicación
                4. División
                5. Salir
                """);
        System.out.print("¿Qué operación desea realizar?");
        var operacion = Integer.parseInt(entrada.nextLine());
        if (operacion >= 1 && operacion <= 4) {
            System.out.println("Digite el valor para el operando 1: ");
            var operando1 = Integer.parseInt(entrada.nextLine());
            System.out.println("Digite el valor para el operando 2: ");
            var operando2 = Integer.parseInt(entrada.nextLine());

            int resultado = 0;
            switch (operacion) {
                case 1 -> {
                    resultado = operando1 + operando2;
                    System.out.println("Resultado de la suma = " + resultado);
                }
                case 2 -> {
                    resultado = operando1 - operando2;
                    System.out.println("Resultado de la resta = " + resultado);
                }
                case 3 -> {
                    resultado = operando1 * operando2;
                    System.out.println("Resultado de la multiplicación = " + resultado);
                }
                case 4 -> {
                    resultado = operando1 / operando2;
                    System.out.println("Resultado de la división = " + resultado);
                }
                default -> System.out.println("Opción errónea.");
            }
        } else if (operacion == 5) {
            System.out.println("Hasta pronto...");
            System.out.println("La aplicación ha finalizado.");
        } else {
            System.out.println("Opción errónea: " + operacion);
        }
    }
}
