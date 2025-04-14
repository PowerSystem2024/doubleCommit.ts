file_name = input("Ingrese el nombre del archivo y su extensión: ")
content = '''# Manejo de archivos con python
Ejemplo:
try:
    file = open(file_name, mode='w', encoding='utf-8')
    file.write(content)
except Exception as e:
    print(e)
finally:
    file.close()
    print(f'Se ha creado el archivo: {file.name}')
    Acción
'''
# Método open
# La 'w' es de write para escribir en el archivo
# La 'r' es de read para leer un archivo
try:
    file = open(file_name, mode='w', encoding='utf-8')
    file.write(content)
except Exception as e:
    print(e)
finally:
    file.close()
    print(f'Se ha creado el archivo: {file.name}')