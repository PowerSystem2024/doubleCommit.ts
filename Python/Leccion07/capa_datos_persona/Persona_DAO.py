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

    _SELECCIONAR = "SELECT * FROM persona ORDER BY id_persona"
    _INSERTAR = "INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)"
    _ACTUALIZAR = (
        "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"
    )
    _ELIMINAR = "DELETE FROM persona WHERE id_persona = %s"
    _SELECCIONAR_PERSONA = (
        "SELECT nombre, apellido, email FROM persona WHERE id_persona=%s"
    )

    # Definimos los métodos de la clase
    @classmethod
    def seleccionar(cls):
        with Conexion.obtener_conexion():
            with Conexion.obtener_cursor() as cursor:
                cursor.execute(cls._SELECCIONAR)
                registros = cursor.fetchall()
                personas = []
                for registro in registros:
                    persona = Persona(
                        registro[0], registro[1], registro[2], registro[3]
                    )
                    personas.append(persona)
                return personas

    @classmethod
    def insertar(cls, persona=Persona) -> int:
        with Conexion.obtener_conexion():
            with Conexion.obtener_cursor() as cursor:
                valores = (persona.nombre, persona.apellido, persona.email)
                cursor.execute(cls._INSERTAR, valores)
                log.debug(f"Persona insertada: {persona}")
                return cursor.rowcount

    @classmethod
    def actualizar(cls, persona=Persona) -> int:
        with Conexion.obtener_conexion():
            with Conexion.obtener_cursor() as cursor:
                valores = (
                    persona.nombre,
                    persona.apellido,
                    persona.email,
                    persona.id_persona,
                )
                cursor.execute(cls._ACTUALIZAR, valores)
                log.debug(f"Se actualizaron los valores para {persona}")
                return cursor.rowcount

    @classmethod
    def eliminar(cls, persona=Persona) -> int:
        with Conexion.obtener_conexion():
            with Conexion.obtener_cursor() as cursor:
                valor = (persona.id_persona,)
                persona = cursor.execute(cls._SELECCIONAR_PERSONA, valor)
                registro = cursor.fetchone()
                cursor.execute(cls._ELIMINAR, valor)
                log.debug(f"Se ha eliminado la persona: {registro}")
                return cursor.rowcount


if __name__ == "__main__":
    # Insertar un registro
    # persona1 = Persona(nombre="Pablo", apellido="Meza", email="pablito_meza@yahoo.com")
    # personas_insertadas = Persona_DAO.insertar(persona1)
    # log.debug(f"Personas insertadas: {personas_insertadas}")

    # Actualizar un registro
    # persona1_actualizada = Persona(10, "Juan", "Rodriguez", "jc_rodriguez@gmail.com")
    # actualizacion_persona1 = Persona_DAO.actualizar(persona1_actualizada)
    # log.debug(f"Se ha actualizado: {actualizacion_persona1} registro.")

    # Seleccionar un objeto
    personas = Persona_DAO.seleccionar()
    for persona in personas:
        log.debug(persona)

    # Eliminar un registro
    # persona1 = Persona(id_persona=9)
    # persona_eliminada = Persona_DAO.eliminar(persona1)
    # log.debug(f'Se ha eliminado {persona_eliminada}')
