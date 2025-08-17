package main

import "fmt"

func lengthOfLongestSubstring(s string) int {
	// Mapa para rastrear os caracteres únicos e suas posições
	seen := make(map[byte]int)
	start := 0     // Início da janela
	maxLength := 0 // Comprimento máximo encontrado

	// Iterar pela string
	for end := 0; end < len(s); end++ {
		char := s[end]

		// Se o caractere já estiver na janela, move o início
		if index, found := seen[char]; found && index >= start {
			start = index + 1
		}

		// Atualiza a posição do caractere no mapa
		seen[char] = end

		// Atualiza o comprimento máximo
		maxLength = max(maxLength, end-start+1)
	}

	return maxLength // Retorna o comprimento da maior substring
}

// Função auxiliar para obter o máximo entre dois números
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	s := "abcabcbb"
	result := lengthOfLongestSubstring(s)
	fmt.Printf("O comprimento da maior substring sem caracteres repetidos é: %d\n", result)
}
