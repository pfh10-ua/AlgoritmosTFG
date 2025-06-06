#include <iostream>
#include <vector>
using namespace std;

void selection_sort(vector<int> &v) {
    for (size_t i = 0; i < v.size() - 1; i++) {
        size_t i_min = i;
        for (size_t j = i + 1; j < v.size(); j++) {
            if (v[j] < v[i_min]) {
                i_min = j;
            }
        }
        swap(v[i], v[i_min]);
    }
}

int main() {
    vector<int> v = {30, 80, 45, 60, 20, 90, 50};

    cout << "Vector original: ";
    for (int num : v) {
        cout << num << " ";
    }
    cout << endl;

    selection_sort(v);

    cout << "Vector ordenado: ";
    for (int num : v) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
