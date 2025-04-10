import requests
import math
import random

def random_joke(jokes) -> object:
    random_index = math.floor(random.random() * len(jokes))
    joke = jokes[random_index]
    return joke

try:
    response = requests.get("https://cdn.jsdelivr.net/gh/liquidsnk86/chistes-malos@main/chistes-malos.json")
    data = response.json()
    joke = random_joke(data["chistes"])
    print(joke["chiste"])
except ZeroDivisionError as e:
    print(f"Error en la ejecución: {e}")
    
# Clases
try:
    10/0
except Exception as e:
    print(f'Ocurrió un error: {e}')

# Si agregamos una ecepción más específica como el ZeroDivisionError el programa se interrumpe para avisar el tipo de error
# y no sigue con la ejecución como en Exception
# En el try se asigna primero las clases de tipo de error hijas y la clase padre al final
resultado = None
a = 10
b = 0
try:
    resultado = a / b
except TypeError as e:
    print(f'TypeError - Ocurrió un error {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error {type(e)}')
except Exception as e:
    print(f'Ocurrió de error: {type(e)}')

print(f'El resultado es {resultado}')
print('Seguimos...')