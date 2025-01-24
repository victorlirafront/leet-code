package main

import (
	"fmt"
	"math"
)

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	// Garante que nums1 seja o menor array
	if len(nums1) > len(nums2) {
		return findMedianSortedArrays(nums2, nums1)
	}

	x, y := len(nums1), len(nums2)
	low, high := 0, x

	for low <= high {
		partitionX := (low + high) / 2
		partitionY := (x+y+1)/2 - partitionX

		// Pega os elementos em volta da partição
		maxLeftX := math.MinInt32
		if partitionX > 0 {
			maxLeftX = nums1[partitionX-1]
		}

		minRightX := math.MaxInt32
		if partitionX < x {
			minRightX = nums1[partitionX]
		}

		maxLeftY := math.MinInt32
		if partitionY > 0 {
			maxLeftY = nums2[partitionY-1]
		}

		minRightY := math.MaxInt32
		if partitionY < y {
			minRightY = nums2[partitionY]
		}

		// Verifica se encontramos a partição correta
		if maxLeftX <= minRightY && maxLeftY <= minRightX {
			// Se o número total de elementos for ímpar
			if (x+y)%2 == 1 {
				return float64(max(maxLeftX, maxLeftY))
			}
			// Se for par, retorna a média dos dois elementos centrais
			return float64(max(maxLeftX, maxLeftY)+min(minRightX, minRightY)) / 2
		} else if maxLeftX > minRightY {
			// Move para a esquerda
			high = partitionX - 1
		} else {
			// Move para a direita
			low = partitionX + 1
		}
	}

	panic("Input arrays are not sorted")
}

// Função para pegar o maior número entre dois
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

// Função para pegar o menor número entre dois
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func main() {
	// Testes
	nums1 := []int{1, 3}
	nums2 := []int{2}
	fmt.Println(findMedianSortedArrays(nums1, nums2)) // Output: 2.0

	nums1 = []int{1, 2}
	nums2 = []int{3, 4}
	fmt.Println(findMedianSortedArrays(nums1, nums2)) // Output: 2.5
}
