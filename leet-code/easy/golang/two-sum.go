//LEETCODE

// Um Map é uma estrutura de dados do JavaScript que armazena pares chave-valor, onde as chaves podem ser de qualquer tipo
// (não apenas strings, como em objetos). Ele oferece algumas vantagens sobre objetos tradicionais e é muito útil quando você precisa de um armazenamento
// de dados que preserve a ordem de inserção e aceite tipos de dados variados como chave.

//A Soma de dois numeros do array precisa ser === ao target

//Criar um Map para armazenar os valores ja vistos
//Criar um loop no array
//Criar uma variavel com o numero atual da iteração
//Cirar um variavel com o valor do complemento
//verificar se o complemento ja existe dentro no Map, se existir, o algoritmo foi resolvido e devemos retornar um array com os indices da soma
// se o if acima for false adicione o numero + index atual do Map, ficara algo como:  ["2": 0]

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
