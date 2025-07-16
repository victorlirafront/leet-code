//LEETCODE

// const words1 = ["a", "aba", "ababa", "aa"];
//eu preciso a primeira string com as seguintes e verificar se o prefixo e sulfixo são iguais
// e a segunda string (str2) deve ser maior ou igual à primeira string
// 1 - Criar a função que faz o laço no array
// 2 - Criar a variavel que conta as vezes que teve a ocorrência de pares
// 2 - Criar a função que valida os pares ( prefixo e sufixo ), e garante de a str2 é maior ou igual a str2

package main

import (
	"fmt"
	"strings"
)

// Função para verificar se string2 tem string1 como prefixo e sufixo e é maior ou igual em tamanho
func isPrefixAndSuffix(string1, string2 string) bool {
	return strings.HasPrefix(string2, string1) &&
		strings.HasSuffix(string2, string1) &&
		len(string2) >= len(string1)
}

// Função para contar os pares que atendem aos critérios
func countPrefixSuffixPairs(words []string) int {
	prefixAndSuffixCounter := 0
	wordsArrLength := len(words)

	for i := 0; i < wordsArrLength; i++ {
		for j := i + 1; j < wordsArrLength; j++ {
			if isPrefixAndSuffix(words[i], words[j]) {
				prefixAndSuffixCounter++
			}
		}
	}

	return prefixAndSuffixCounter
}

func main() {
	words1 := []string{"a", "aba", "ababa", "aa"}
	fmt.Println(countPrefixSuffixPairs(words1)) // Saída: 4

	words2 := []string{"pa", "papa", "ma", "mama"}
	fmt.Println(countPrefixSuffixPairs(words2)) // Saída: 2

	words3 := []string{"abab", "ab"}
	fmt.Println(countPrefixSuffixPairs(words3)) // Saída: 0
}
