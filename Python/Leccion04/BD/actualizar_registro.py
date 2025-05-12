import psycopg2
from dsn import DSN

conexion = psycopg2.connect(**DSN)

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = """
            UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s
            """
            entrada = input(
                "Inserte nombre, apellido, email e id (separado por coma):\n"
            )
            cursor.execute(sentencia, entrada.split(", "))
            registros_actualizados = cursor.rowcount
            print(f"Registros actualizados {registros_actualizados}")


except psycopg2.Error as e:
    print(f"Ocurrió un error: {e}")
finally:
    conexion.close()
