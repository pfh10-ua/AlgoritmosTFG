#include <stdio.h>

int secuencialBusqueda(int arr[], int n, int x) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == x) {
            return i; // Devuelve el índice donde se encuentra el elemento
        }
    }
    return -1; // Devuelve -1 si el elemento no se encuentra
}

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int n = sizeof(arr) / sizeof(arr[0]);
    int x = 30;

    int resultado = secuencialBusqueda(arr, n, x);

    if (resultado != -1) {
        printf("Elemento encontrado en el índice %d\n", resultado);
    } else {
        printf("Elemento no encontrado\n");
    }

    return 0;
}