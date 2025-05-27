
# Esto es para conectar postgres
import psycopg2 as bd
from dsn import DSN

conexion = bd.connect(**DSN)


try:
    conexion.autocommit = False #Esto directamente eno ddeberia estar, inicia la trasnsacción
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email ) VALUES (%s, %s, %s)'
    valores = ('Sergio', 'Busquets', 'elmejor5delahistoria@gmail.com')
    cursor.execute (sentencia,valores)

    sentencia = "UPDATE persona SET nombre =%$, email=%$, WHERE id_persona=%$"
    valores = ('Maluma', 'Beybe', 'elmaluma@gmail.com.ar', 1)
    cursor.execute(sentencia, valores)


    conexion.commit()#hacemos el commit manualmente, se cierra la transaccíon
    print ('Termina la transacción')


except Exception as e:
    conexion.rollback()
    print(f"Ocurrió un error, se hizo un rollback: {e}")
finally:
    # Cerramos la conexión
    conexion.close()