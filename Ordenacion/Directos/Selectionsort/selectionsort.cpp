#include <vector>
using namespace std;

void selection_sort(vector<T> &v) {
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
