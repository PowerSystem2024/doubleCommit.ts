# Esto es para conectar postgres
import psycopg2
from dsn import DSN

conexion = psycopg2.connect(**DSN)

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "SELECT * FROM persona WHERE id_persona IN %s"
            entrada = input("Digite los id_persona a buscar (separados por coma): ")
            llaves_primarias = (tuple(entrada.split(", ")),)  # Tupla de tuplas

            cursor.execute(sentencia, llaves_primarias)
            registros = cursor.fetchall()
            for registro in registros:
                print(registro)

except psycopg2.Error as e:
    print(f"Ocurrió un error: {e}")
finally:
    # Cerramos la conexión
    conexion.close()
