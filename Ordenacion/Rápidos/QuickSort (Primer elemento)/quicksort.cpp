
#include <vector>
using namespace std;

void quicksort(vector<int> &v, size_t first, size_t last) {
    if (last - first < 2) return;

    size_t p = first, l = last;

    while (p + 1 != l) {
        if (v[p + 1] < v[p]) {
            swap(v[p + 1], v[p]);
            p++;
        } else {
            l--;
            swap(v[p + 1], v[l]);
        }
    }

    quicksort(v, first, p);
    quicksort(v, p + 1, last);
}

void quicksort(vector<int> &v) {
    quicksort(v, 0, v.size());
}
