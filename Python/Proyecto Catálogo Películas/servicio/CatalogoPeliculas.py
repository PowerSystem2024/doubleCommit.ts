import os

current_dir = os.getcwd()
class CatalogoPeliculas:
    ruta_archivo = os.path.join(current_dir + '/Python/Proyecto Catálogo Películas/peliculas.txt')

    @staticmethod
    def agregar_pelicula(pelicula):
        with open(CatalogoPeliculas.ruta_archivo, 'a', encoding='utf-8') as archivo:
            archivo.write(str(pelicula) + '\n')

    @staticmethod
    def listar_peliculas():
        try:
            with open(CatalogoPeliculas.ruta_archivo, 'r', encoding='utf-8') as archivo:
                print("Películas en el catálogo:")
                for linea in archivo:
                    print(f'- {linea.strip()}')
        except FileNotFoundError:
            print("No se encontró el archivo de películas.")

    @staticmethod
    def eliminar():
        if os.path.exists(CatalogoPeliculas.ruta_archivo):
            os.remove(CatalogoPeliculas.ruta_archivo)
            print("Archivo eliminado.")
        else:
            print("El archivo no existe.")
