# Esto es para conectar postgres
import psycopg2
from dsn import DSN

conexion = psycopg2.connect(**DSN)

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "SELECT * FROM persona WHERE id_persona = %s"  # Placeholder
            id_persona = input("Ingrese el numero del id: ")
            cursor.execute(
                sentencia, (id_persona,)
            )  # De esta manera ejecutamos la sentencia pasando el parametro como tupla
            resistros = cursor.fetchone()
            print(resistros)
            # Obtener los resultados (Todos)
            personas = cursor.fetchall()

            for persona in personas:
                print(persona)


except Exception as e:
    print(f"Ocurrió un error: {e}")
finally:
    # Cerramos la conexión
    conexion.close()
