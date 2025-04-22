from dominio.Pelicula import Pelicula
from servicio.CatalogoPeliculas import CatalogoPeliculas

def mostrar_menu():
    print("\nMenú de Catálogo de Películas:")
    print("1) Agregar película")
    print("2) Listar películas")
    print("3) Eliminar archivo de películas")
    print("4) Salir")

opcion = 0
while opcion != 4:
    mostrar_menu()
    try:
        opcion = int(input("Selecciona una opción: "))
        if opcion == 1:
            nombre = input("Nombre de la película: ")
            pelicula = Pelicula(nombre)
            CatalogoPeliculas.agregar_pelicula(pelicula)
        elif opcion == 2:
            CatalogoPeliculas.listar_peliculas()
        elif opcion == 3:
            CatalogoPeliculas.eliminar()
        elif opcion == 4:
            print("Saliendo del programa...")
        else:
            print("Opción inválida.")
    except ValueError:
        print("Ingresa un número válido.")
