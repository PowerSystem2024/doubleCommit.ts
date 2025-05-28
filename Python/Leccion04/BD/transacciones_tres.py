# Esto es para conectar postgres
import psycopg2 as bd
from dsn import DSN

conexion = bd.connect(**DSN)

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "INSERT INTO persona(nombre, apellido, email) VALUES(%s, %s, %s)"
            valores = ('Gato', 'Felix', 'elgato_felix@yahoo.com')
            cursor.execute(sentencia, valores)
            
            sentencia = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"
            valores = ('Mickey', 'Vainilla', 'mickyVainilla.javascript.com', 1)
            cursor.execute(sentencia, valores)
            
except bd.Error as e:
    print(f"Ocurrió un error, se hizo un rollback: {e}")
finally:
    # Cerramos la conexión
    conexion.close()
    print("Termina la transacción")
