# Esto es para conectar postgres
import psycopg2
from dsn import DSN

conexion = psycopg2.connect(**DSN)

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = """
            INSERT INTO persona (nombre, apellido, email)
                VALUES (%s, %s, %s)
            """
            entrada = input("Inserte nombre, apellido e email (separado por coma):\n")

            valores = tuple(entrada.split(", "))
            print(valores)
            # conexion.commit() esto se utiliza para guardar los cambios en la base de datos
            cursor.execute(sentencia, valores)
            registros_insertados = cursor.rowcount
            print(f"Registros insertados {registros_insertados}")

except psycopg2.Error as e:
    print(f"Ocurrió un error: {e}")
finally:
    # Cerramos la conexión
    conexion.close()
