# Esto es para conectar postgres
import psycopg2 as bd
from dsn import DSN

conexion = bd.connect(**DSN)


try:
    #conexion.autocommit = False #Esto directamente eno ddeberia estat
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email ) VALUES (%s, %s, %s)'
    valores = ('Flavio', 'Mendoza', 'hola@gmail.com')
    cursor.execute (sentencia,valores)
    conexion.commit()#hacemos el commit manualmente
    print ('Termina la transacción')


except Exception as e:
    conexion.rollback()
    print(f"Ocurrió un error, se hizo un rollback: {e}")
finally:
    # Cerramos la conexión
    conexion.close()
