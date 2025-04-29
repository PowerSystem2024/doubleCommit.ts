# Esto es para conectar postgres
import psycopg2

credenciales = {
    "user": "postgres",
    "password": "32088028..mGc",
    "host": "127.0.0.1",
    "port": "5432",
    "database": "test_bd"
}
conexion = psycopg2.connect(**credenciales)

cursor = conexion.cursor()
sentencia = 'SELECT * FROM persona'
cursor.execute(sentencia)

# Obtener los resultados (Todos)
personas = cursor.fetchall()

for persona in personas:
    print(persona)

# Cerramos la conexión
cursor.close()
conexion.close()