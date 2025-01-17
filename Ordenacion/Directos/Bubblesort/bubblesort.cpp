using namespace std;

void bubblesort(int vector[], int n) { //n es el tamaño del vector
    int aux;
    bool swapped = true;
    for (int i = 0; i < n - 1 && swapped; i++) {
        swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (vector[j] > vector[j + 1]) {
                aux = vector[j];
                vector[j] = vector[j + 1];
                vector[j + 1] = aux;
                swapped = true;
            }
        }
    }
}