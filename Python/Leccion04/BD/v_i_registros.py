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
            print(
                "Ingreso de varios datos, para salir de este modo ingrese la palabra 'salir'\n"
            )

            valores = []  # Lista para acumular los registros

            while True:
                entrada = input(
                    "Inserte nombre, apellido e email (separado por coma):\n"
                )
                if entrada.lower().startswith("salir"):
                    print("Saliendo del modo ingreso de datos..")
                    break
                partes = entrada.split(", ")
                if len(partes) == 3:
                    valores.append(tuple(partes))
                else:
                    print(
                        "Entrada inválida. Asegúrese de separar nombre, apellido e email por coma y espacio."
                    )

            if valores:
                cursor.executemany(sentencia, valores)
                registros_insertados = cursor.rowcount
                print(f"Registros insertados: {registros_insertados}")
            else:
                print("No se ingresaron registros.")

except psycopg2.Error as e:
    print(f"Ocurrió un error: {e}")
finally:
    conexion.close()
