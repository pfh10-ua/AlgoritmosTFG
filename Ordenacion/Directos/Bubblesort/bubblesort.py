def bubblesort(vector):
    n = len(vector)  # n es el tamaño del vector
    swapped = True
    for i in range(n - 1):
        if not swapped:  # Si no hubo intercambios, el vector ya está ordenado
            break
        swapped = False
        for j in range(n - i - 1):
            if vector[j] > vector[j + 1]:
                # Intercambiar los elementos
                vector[j], vector[j + 1] = vector[j + 1], vector[j]
                swapped = True
