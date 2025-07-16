//HackerRank

package main

import (
	"fmt"
)

func compareTriplets(a []int, b []int) []int {
	alicePoints := 0
	bobPoints := 0

	// Compare elements of both arrays
	for i := 0; i < len(a); i++ {
		if a[i] > b[i] {
			alicePoints++
		} else if a[i] < b[i] {
			bobPoints++
		}
	}

	// Return results as a slice
	return []int{alicePoints, bobPoints}
}

func main() {
	// Example inputs
	a := []int{5, 6, 7}
	b := []int{3, 6, 10}

	// Call the function and print the result
	result := compareTriplets(a, b)
	fmt.Println(result) // Output: [1 1]
}
