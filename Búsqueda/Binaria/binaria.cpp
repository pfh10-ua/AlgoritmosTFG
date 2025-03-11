#include <iostream>
#include <vector>
using namespace std;

int binarySearch(const vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Target not found
}

int main() {
    std::vector<int> arr = {2, 3, 4, 10, 40};
    int target = 10;
    int result = binarySearch(arr, target);

    if (result != -1) {
        std::cout << "Elemento encontrado en la posición " << result << endl;
    } else {
        std::cout << "Elemento no encontrado" << endl;
    }

    return 0;
}