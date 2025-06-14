import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        while (true) {
            mostrarMenu();
            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {
                ejecutarOperacion(operacion, entrada);
                } else if (operacion == 5) {
                    System.out.println("Hasta pronto...");
                    System.out.println("La aplicación ha finalizado.");
                    break;
                } else {
                    System.out.println("Opción errónea: " + operacion);
                }
                System.out.println();
            } catch (Exception e) {
                System.out.println("Ocurrió un error = " + e.getMessage() + "\n");
            }
        } // Fin del while
    }

    public static void mostrarMenu() {
        System.out.println("****** Aplicación Calculadora ******");
        System.out.println("""
                1. Suma
                2. Resta
                3. Multiplicación
                4. División
                5. Salir
                """);
        System.out.print("¿Qué operación desea realizar? ");
    }

    private static void ejecutarOperacion(int operacion, Scanner entrada) {
        System.out.println("Digite el valor para el operando 1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.println("Digite el valor para el operando 2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());

        double resultado;
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
    }
}
