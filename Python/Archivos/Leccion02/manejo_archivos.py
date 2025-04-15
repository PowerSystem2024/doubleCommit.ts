# Método open
# La 'w' es de write para escribir en el archivo
# La 'r' es de read para leer un archivo
# La 'a' es de append para agregar al archivo
# La 'x' es para crear un archivo

import os
# Escencial si hay que leer un archivo en el directorio actual
current_dir = os.getcwd() # Current Working Directory

# Método path join para ingresar o unir las rutas del fichero
file_path = os.path.join(current_dir + '/Python/Archivos/Leccion02/manejo_archivos.py')

file_name = input("Ingrese el nombre del archivo y su extensión: ")
content = open(file_path, 'r', encoding='utf-8').read()

try:
    file = open(file_name, mode='w', encoding='utf-8')
    file.write(content)
except Exception as e:
    print(e)
finally:
    file.close()
    print(f'Se ha creado el archivo: {file.name}')