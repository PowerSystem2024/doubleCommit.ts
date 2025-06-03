from Conexion import Conexion
from Persona import Persona
from logger_base import log

class Persona_DAO:
    """
     DAO significa: Data Access Object
     CRUD: significa:
                    Create -> Insertar
                    Read -> Seleccionar
                    Update -> Actualizar
                    Delete -> Eliminar
    """
    
    _SELECCIONAR = 'SELECT * FROM persona ORDER BY id_persona'
    _INSERTAR = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    _ACTUALIZAR = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    _ELIMINAR = 'DELETE FROM persona WHERE id_persona = %s'
    
    # Definimos los métodos de la clase
    @classmethod
    def seleccionar(cls):
        with Conexion.obtener_conexion():
            with Conexion.obtener_cursor() as cursor:
                cursor.execute(cls._SELECCIONAR)
                registros = cursor.fetchall()
                personas = []
                for registro in registros:
                    persona = Persona(registro[0], registro[1], registro[2], registro[3])
                    personas.append(persona)
                return personas

if __name__ == "__main__":
    personas = Persona_DAO.seleccionar()
    for persona in personas:
        log.debug(persona)