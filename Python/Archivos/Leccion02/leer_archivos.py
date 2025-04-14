# Lectura de archivos

file_name = input("ingrese el nombre de archivo: ")

file = open(file_name, mode='r', encoding='utf-8')
print(file.read())