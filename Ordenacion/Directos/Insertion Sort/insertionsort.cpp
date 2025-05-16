#include <iostream>
#include <vector>

void insertionSort(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; ++i) {
        int key = arr[i];            // Elemento actual a insertar
        int j = i - 1;

        // Mueve los elementos mayores que key una posición hacia adelante
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;            // Inserta el elemento en su lugar
    }
}

void printArray(const std::vector<int>& arr) {
    for (int num : arr)
        std::cout << num << " ";
    std::cout << std::endl;
}

int main() {
    std::vector<int> data = {12, 11, 13, 5, 6};

    std::cout << "Array original: ";
    printArray(data);

    insertionSort(data);

    std::cout << "Array ordenado: ";
    printArray(data);

    return 0;
}
