import psycopg2
from dsn import DSN

conexion = psycopg2.connect(**DSN)

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = """
            DELETE FROM persona WHERE id_persona IN %s
            """
            entrada = input(
                "Inserte los ids de las personas a eliminar separados por coma:\n"
            )
            valores = (tuple(entrada.split(",")),)
            cursor.execute(sentencia, valores)
            eliminados = cursor.rowcount
            print(f"Registros eliminados {eliminados}")


except psycopg2.Error as e:
    print(f"Ocurrió un error: {e}")
finally:
    conexion.close()
