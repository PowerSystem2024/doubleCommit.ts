# Esto es para conectar postgres
import psycopg2 as bd
from dsn import DSN

conexion = bd.connect(**DSN)

try:
    # conexion.autocommit = False  # Desactivamos el autocommit , esto direcatamente no debería estar
    cursor = conexion.cursor()
    sentencia = "INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)"
    valores = ('Maria', 'Esparza', 'mesparza@gmail.com')
    cursor.execute(sentencia, valores)
    conexion.commit()  # Confirmamos la transacción, hacemos el commit manualmente
    print("Termina la transacción")
except bd.Error as e:
    conexion.rollback() # Deshacemos la transacción
    print(f"Ocurrió un error, se hizo un rollback: {e}")
finally:
    # Cerramos la conexión
    conexion.close()
