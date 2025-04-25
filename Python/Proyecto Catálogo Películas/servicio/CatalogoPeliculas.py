import os

current_dir = os.getcwd()
class CatalogoPeliculas:
    ruta_archivo = os.path.join(current_dir + '/Python/Proyecto Catálogo Películas/peliculas.txt')

    @staticmethod
    def agregar_pelicula(pelicula):
        with open(CatalogoPeliculas.ruta_archivo, 'a', encoding='utf-8') as archivo:
            archivo.write(str(pelicula) + '\n')

    @staticmethod
    def listar_peliculas() -> str:
        try:
            with open(CatalogoPeliculas.ruta_archivo, 'r', encoding='utf-8') as archivo:
                print("Películas en el catálogo:")
                for linea in archivo:
                    print(f'- {linea.strip()}')
        except FileNotFoundError:
            print("No se encontró el archivo de películas.")
            
    @staticmethod

    def buscar_pelicula(pelicula: str) -> str:
        try:
            with open(CatalogoPeliculas.ruta_archivo, 'r', encoding='utf-8') as archivo:
                pelicula_encontrada = False
                lineas = archivo.readlines()
                for linea in lineas:
                    if linea.lower().startswith(pelicula.lower()):
                        print("Se ha encontrado la siguiente película:")
                        print(linea.strip())
                        pelicula_encontrada = True
                if not pelicula_encontrada:
                        print("Película inexistente")
        except FileNotFoundError:
            print(f"No se encontró la ruta: {CatalogoPeliculas.ruta_archivo}")
            
    @staticmethod
    def eliminar_pelicula(pelicula: str):
        try:
            pelicula_encontrada = False
            with open(CatalogoPeliculas.ruta_archivo, 'r', encoding='utf-8') as archivo:
                lineas = archivo.readlines()
            
            with open(CatalogoPeliculas.ruta_archivo, 'w', encoding='utf-8') as archivo:
                for linea in lineas:
                    if not linea.lower().startswith(pelicula.lower()):
                        archivo.write(linea)
                    else:
                        print(f'❌ Película eliminada: {linea.strip()}')
                        pelicula_encontrada = True
            if not pelicula_encontrada:
                print("Película inexistente")
        except FileNotFoundError:
            print('Archivo no econtrado')

    @staticmethod
    def eliminar():
        if os.path.exists(CatalogoPeliculas.ruta_archivo):
            os.remove(CatalogoPeliculas.ruta_archivo)
            print("Archivo eliminado.")
        else:
            print("El archivo no existe.")
