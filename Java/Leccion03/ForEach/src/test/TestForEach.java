package test;

import domain.Persona;

public class TestForEach {

    public static void main(String[] args) {
        int edades[] = {5, 6, 8, 9};
        for (int edad : edades) { // Sintáxis del ForEach
            System.out.println("edad = " + edad);
        }

        Persona personas[] = {new Persona("Juana"), new Persona("Carla"), new Persona("Beatriz")};

        for (Persona persona : personas) {
            System.out.println("Persona = " + persona);
        }
    }
}
