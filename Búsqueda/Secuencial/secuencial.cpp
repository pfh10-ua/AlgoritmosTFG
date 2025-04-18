#include <iostream>
using namespace std;

// Si lo encuentra devuelve la posición, si no lo encuentra devuelve -1
int busquedaSecuencial(int vector[], int n, int valor) {
    for (int i = 0; i < n; i++) {
        if (vector[i] == valor) {
            return i;
        }
    }
    return -1;
}

int main() {
    int vector[] = {10, 20, 30, 40, 50};
    int n = sizeof(vector) / sizeof(vector[0]);
    int valor;

    cout << "Introduce el valor a buscar: ";
    cin >> valor;

    int posicion = busquedaSecuencial(vector, n, valor);

    if (posicion != -1) {
        cout << "Valor encontrado en la posición: " << posicion << endl;
    } else {
        cout << "Valor no encontrado." << endl;
    }

    return 0;
}