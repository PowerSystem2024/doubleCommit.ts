import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        // Definimos la lista fuera del cilco while
        List<Persona> personas = new ArrayList<>();

        // Empezamos con el menú
        var salir = false;
        while (!salir) {
            mostrarMenu();
            try {
                salir = ejecutarOperacion(entrada, personas);
            } catch (Exception e) {
                System.out.println("Ocurrió un error: " + e);
            }
        } // Fin del ciclo while
    } // Fin del ciclo main

    private static void mostrarMenu() {
        // Mostrar las opciones
        System.out.print("""
                ******** Listado de personas ********
                1. Agregar
                2. Listar
                3. Salir
                """);
        System.out.print("Digite una de las opciones: ");
    }

    private static boolean ejecutarOperacion(Scanner entrada, List<Persona> personas) {
        int opcion = Integer.parseInt(entrada.nextLine());
        if (opcion == 1) {
            System.out.println("Ingrese el nombre: ");
            String nombre = entrada.nextLine();
            System.out.println("Ingrese el teléfono: ");
            String tel = entrada.nextLine();
            System.out.println("Ingrese el email: ");
            String email = entrada.nextLine();
            Persona persona = new Persona(nombre, tel, email);
            personas.add(persona);
            System.out.println("Se añadió persona con éxito: " + persona.toString());
            System.out.println("La lista tiene: " + personas.size() + " elemento/s.");
            return false;
        } else if (opcion == 2) {
            if (personas.toArray().length == 0) {
                System.out.println("No hay personas cargadas en el sistema para listar.");
            }
            System.out.println("Personas en la lista: ");
            for (int i = 0; i < personas.toArray().length; i++) {
                System.out.println(personas.toArray()[i].toString());
            }
        } else {
            System.out.println("Saliendo de la aplicación...");
            return true;
        }
        return false;
    }
}