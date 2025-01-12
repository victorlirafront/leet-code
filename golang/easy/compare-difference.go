package main

import (
	"fmt"
	"math"
)

func diagonalDifference(arr [][]int) int {
	diagonalLeft := 0
	diagonalRight := 0
	arrayLength := len(arr)

	for i := 0; i < arrayLength; i++ {
		diagonalLeft += arr[i][i]                // Soma na diagonal principal
		diagonalRight += arr[i][arrayLength-1-i] // Soma na diagonal secundária
	}

	// Retorna a diferença absoluta entre as diagonais
	return int(math.Abs(float64(diagonalLeft - diagonalRight)))
}

func main() {
	matrix := [][]int{
		{11, 2, 4},
		{4, 5, 6},
		{10, 8, -12},
	}

	result := diagonalDifference(matrix)
	fmt.Println(result) // Saída: 15
}
