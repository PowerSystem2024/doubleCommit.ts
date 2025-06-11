from psycopg2 import pool
from logger_base import log
import sys


class Conexion:
    _DATABASE = "test_bd"
    _USERNAME = "postgres"
    _PASSWORD = "admin1234"
    _PORT = "5432"
    _HOST = "127.0.0.1"
    _MIN_CON = 1
    _MAX_CON = 5
    _pool = None

    @classmethod
    def obtener_conexion(cls):
        conexion = cls.obtener_pool().getconn()
        log.debug(f'Conexión obtenida del pool: {conexion}')
        return conexion
        
            
    @classmethod
    def obtener_pool(cls):
        if cls._pool is None:
            try:
                cls._pool = pool.SimpleConnectionPool(
                    maxconn=cls._MAX_CON,
                    minconn=cls._MIN_CON,
                    host=cls._HOST,
                    user=cls._USERNAME,
                    password=cls._PASSWORD,
                    port=cls._PORT,
                    database=cls._DATABASE
                )
                log.debug(f'Creación de l pool exitosa {cls._pool}')
                return cls._pool
            except Exception as e:
                log.error(f'Ocurrió un error en el pool: {e}')
                sys.exit()
        else:
            return cls._pool

    @classmethod
    def obtener_cursor(cls):
        pass

if __name__ == "__main__":
    conexion1 = Conexion.obtener_conexion()
    conexion2 = Conexion.obtener_conexion()
    conexion3 = Conexion.obtener_conexion()
    conexion4 = Conexion.obtener_conexion()
    conexion5 = Conexion.obtener_conexion()
    conexion6 = Conexion.obtener_conexion()