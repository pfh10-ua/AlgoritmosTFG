def selection_sort(arr):
    """
    Perform selection sort on the given list.

    :param arr: List of elements to be sorted
    :return: Sorted list
    """
    n = len(arr)
    for i in range(n):
        # Find the minimum element in the remaining unsorted array
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        # Swap the found minimum element with the first element
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr


# Example usage
if __name__ == "__main__":
    sample_array = [30, 80, 45, 60, 20, 90, 50]
    print("Original array:", sample_array)
    sorted_array = selection_sort(sample_array)
    print("Sorted array:", sorted_array)