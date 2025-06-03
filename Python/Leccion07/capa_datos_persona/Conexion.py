import psycopg2 as bd
from logger_base import log
import sys


class Conexion:
    _DATABASE = "test_bd"
    _USERNAME = "postgres"
    _PASSWORD = "pepito_grillo"
    _PORT = "5432"
    _HOST = "127.0.0.1"
    _conexion = None
    _cursor = None

    @classmethod
    def obtener_conexion(cls):
        if cls._conexion is None:
            try:
                cls._conexion = bd.connect(
                    host=cls._HOST,
                    user=cls._USERNAME,
                    password=cls._PASSWORD,
                    port=cls._PORT,
                    database=cls._DATABASE,
                )
                log.debug(f"Conexión exitosa: {cls._conexion}")
                return cls._conexion
            except Exception as e:
                log.error(f"Ocurrió un error: {e}")
                sys.exit()
        else:
            return cls._conexion

    @classmethod
    def obtener_cursor(cls):
        if cls._cursor is None:
            try:
                cls._cursor = cls.obtener_conexion().cursor()
                log.debug(f"Se abrió correctamente el cursor: {cls._cursor}")
                return cls._cursor
            except Exception as e:
                log.error(f"Ocurrió un error: {e}")
                sys.exit()
        else:
            return cls._cursor


if __name__ == "__main__":
    Conexion.obtener_conexion()
    Conexion.obtener_cursor()
