import logging as log

log.basicConfig(level=log.DEBUG,
                format='%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s',
                datefmt='%I:%M:%S %p',
                handlers=[
                    log.FileHandler("capa_datos.log"),
                    log.StreamHandler()
                ])

# Llamamos una configuración básica
if __name__ == "__main__":
    log.debug("log a nivel debug")
    log.info("log a nivel info")
    log.warning("log a nivel warning")
    log.error("log a nivel error")
    log.critical("log a nivel critical")