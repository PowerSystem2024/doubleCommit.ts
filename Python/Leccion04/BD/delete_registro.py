import psycopg2
from dsn import DSN

conexion = psycopg2.connect(**DSN)

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = """
            DELETE FROM persona WHERE id_persona = %s
            """
            entrada = input("Inserte el id de la persona a eliminar:\n")
            cursor.execute(sentencia, (entrada,))
            eliminados = cursor.rowcount
            print(f"Registros eliminados {eliminados}")


except psycopg2.Error as e:
    print(f"Ocurrió un error: {e}")
finally:
    conexion.close()
