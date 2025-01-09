//Si lo encuentra devuelve la posición, si no lo encuentra devuelve -1
int busquedaSecuencial(int vector[], int n, int valor) {
    for (int i = 0; i < n; i++) {
        if (vector[i] == valor) {
            return i;
        }
    }
    return -1;
}