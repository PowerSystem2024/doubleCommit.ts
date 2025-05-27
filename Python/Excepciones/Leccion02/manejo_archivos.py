#Declaramos una variable 
try:
    archivo = open('prueba.txt', 'w', encoding = 'utf8')#La w es de write(significa escribir)
    archivo.write('Hola a todos como estan? Somos el grupo Double Commit\n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('como por ejemplo: acción, ejecución y producción \n')
    archivo.write('Las letras son: \nr read leer, \na append anexa, \nw write escribe, \nx crea un archivo' )
    archivo.write('\nt esta es para texto o text, \nb archivos binarios, \n w+ lee y escribe, \nr+ son iguales \n')
    archivo.write('Saludos a todos los chusmas que se pasen dejen su estrellita :)')
    archivo.write('Hasta la proxima\n')
except Exception as e:
    print(e)
finally:#siempre se ejecuta 
    archivo.close()#Con esto se debe cerrar el archivo 
    
#archivo.write('Todo esta joya'): este es un error