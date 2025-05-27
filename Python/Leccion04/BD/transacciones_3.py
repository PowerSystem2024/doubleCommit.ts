
# Esto es para conectar postgres
import psycopg2 as bd
from dsn import DSN

conexion = bd.connect(**DSN)


try:
    with conexion:
        with conexion.cursor() as cursor:
         sentencia = 'INSERT INTO persona(nombre, apellido, email ) VALUES (%s, %s, %s)'
         valores = ('Sergio', 'Busquets', 'elmejor5delahistoria@gmail.com')
         cursor.execute (sentencia,valores)

         sentencia = "UPDATE persona SET nombre =%$, email=%$, WHERE id_persona=%$"
         valores = ('Wisin', 'Yandel', 'loiluminatibebe@gmail.com.ar', 1)
         cursor.execute(sentencia, valores)

       

except Exception as e:
   print(f"Ocurrió un error, se hizo un rollback: {e}")
finally:
    # Cerramos la conexión
    conexion.close()
    print ('Termina la transacción')
