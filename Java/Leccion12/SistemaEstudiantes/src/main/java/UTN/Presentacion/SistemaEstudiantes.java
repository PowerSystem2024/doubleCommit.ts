package UTN.Presentacion;

import UTN.datos.EstudianteDAO;
import UTN.dominio.Estudiante;

import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class SistemaEstudiantes {
    public static void main(String[] args) {
        var salir = false;
        var consola = new Scanner(System.in);
        var estudianteDAO = new EstudianteDAO();

        while (!salir) {
            try {
                mostrarMenu();
                salir = ejecutarOpciones(consola, estudianteDAO);
            } catch (Exception e) {
                System.out.println("Ocurrió un error al ejecutar la operación: " + e.getMessage());
            }
        } // Fin while
    } // Fin main

    private static void mostrarMenu() {
        System.out.println("""
                ********* Sistema Estudiantes *********
                1. Listar estudiantes
                2. Buscar estudiantes
                3. Agregar estudiante
                4. Modificar estudiante
                5. Eliminar estudiante
                6. Salir
                
                • Elige una opción: 
                """);
    }

    // Método para ejecutar las opciones, va a regresar un valor booleano, ya que es el que
    // puede modificar el valor de la variable salir, si es verdadero termina el ciclo while.
    private static boolean ejecutarOpciones(Scanner consola, EstudianteDAO estudianteDAO) {
        var opcion = Integer.parseInt(consola.nextLine());
        var salir = false;
        switch (opcion) { // Listar estudiantes
            case 1 -> {
                System.out.println("Listado de estudiantes: ");
                // No muestra la información, solo recupera la info y regresa una lista
                var estudiantes = estudianteDAO.listarEstudiante(); // Recibe el listado
                // Vamos a iterar cada objeto de tipo estudiante
                estudiantes.forEach(System.out::println);
            } // Fin caso 1
            case 2 -> {
                System.out.println("Introduce el ID del estudiante a buscar: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var encontrado = estudianteDAO.buscarEstudiantePorId(estudiante);
                if (encontrado) {
                    System.out.println("Estudiante encontrado: " + estudiante);
                } else {
                    System.out.println("No se ha encontrado al estudiante: " + estudiante);
                }
            } // Fin caso 2
            case 3 -> {
                System.out.println("Agregar estudiante: ");
                System.out.print("Nombre: ");
                var nombre = consola.nextLine();
                System.out.print("Apellido: ");
                var apellido = consola.nextLine();
                System.out.print("Teléfono: ");
                var telefono = consola.nextLine();
                System.out.print("Email: ");
                var email = consola.nextLine();
                var estudiante = new Estudiante(nombre, apellido, email, telefono);
                var agregado = estudianteDAO.agregarEstudiante(estudiante);
                if (agregado) {
                    System.out.println("Se ha agregado al estudiante con éxito: " + estudiante);
                } else {
                    System.out.println("Ocurrió un error al agregar estudiante.");
                }
            } // Fin caso 3
            case 4 -> { // Modificar estudiante
                System.out.println("Modificar estudiante: ");
                // Aquí lo primero es espicificar es el id del objeto a modificar
                System.out.println("Id estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                System.out.print("Nombre: ");
                var nombre = consola.nextLine();
                System.out.print("Apellido: ");
                var apellido = consola.nextLine();
                System.out.print("Teléfono: ");
                var telefono = consola.nextLine();
                System.out.print("Email: ");
                var email = consola.nextLine();
                // Crea el objeto estudiante a modificar
                var estudiante = new Estudiante(idEstudiante, nombre, apellido, telefono, email);
                var modificado = estudianteDAO.modificarEstudiante(estudiante);
                if (modificado) {
                    System.out.println("Estudiante modificado: " + estudiante);
                } else {
                    System.out.println("Estudiante NO modificado: " + estudiante);
                }
            } // Fin caso 4
            case 5 -> {
                System.out.println("Eliminar estudiante: ");
                System.out.println("Id estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var eliminado = estudianteDAO.eliminarEstudiante(estudiante);
                if (eliminado) {
                    System.out.println("Se ha eliminado el estudiante: " + estudiante);
                } else {
                    System.out.println("No se eliminó el estudiante: " + estudiante);
                }
            } // Fin caso 5
            case 6 -> {
                System.out.println("Hasta pronto...");
                salir = true;
            }
            default -> System.out.println("Opción inválida, ingrese otra opción.");
        }
        return salir;
    }
}