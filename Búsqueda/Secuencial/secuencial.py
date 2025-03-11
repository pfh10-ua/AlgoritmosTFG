def busqueda_secuencial(lista, objetivo):
    """
    Realiza una búsqueda secuencial en una lista.

    Parámetros:
    lista (list): La lista en la que se va a buscar.
    objetivo: El elemento que se desea encontrar.

    Retorna:
    int: El índice del elemento si se encuentra, de lo contrario -1.
    """
    for indice, elemento in enumerate(lista):
        if elemento == objetivo:
            return indice
    return -1

# Ejemplo de uso
lista = [3, 5, 2, 4, 9]
objetivo = 4
resultado = busqueda_secuencial(lista, objetivo)
if resultado != -1:
    print(f'Elemento encontrado en el índice: {resultado}')
else:
    print('Elemento no encontrado')