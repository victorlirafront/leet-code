//LEETCODE

package main

import "fmt"

// Função para encontrar os índices de dois números cuja soma seja igual ao target
func twoSum(nums []int, target int) []int {
	seen := make(map[int]int) // Map para armazenar os valores já vistos

	for i, num := range nums {
		complement := target - num

		// Verifica se o complemento já está no map
		if idx, found := seen[complement]; found {
			return []int{idx, i} // Retorna os índices
		}

		// Adiciona o número atual e seu índice no map
		seen[num] = i
	}

	return nil // Retorna nil se não encontrar a soma
}

func main() {
	result := twoSum([]int{2, 7, 11, 15}, 9)
	fmt.Println(result) // Saída: [0 1]
}
