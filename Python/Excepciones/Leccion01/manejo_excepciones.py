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