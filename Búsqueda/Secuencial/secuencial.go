package main

import "fmt"

// SequentialSearch performs a sequential search on the given slice for the target value.
// It returns the index of the target if found, otherwise returns -1.
func SequentialSearch(arr []int, target int) int {
	for i, v := range arr {
		if v == target {
			return i
		}
	}
	return -1
}

func main() {
	arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	target := 5

	index := SequentialSearch(arr, target)
	if index != -1 {
		fmt.Printf("Element found at index %d\n", index)
	} else {
		fmt.Println("Element not found")
	}
}