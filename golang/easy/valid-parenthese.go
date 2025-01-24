package main

import "fmt"

func isValid(s string) bool {
	// Mapa que armazena os pares de parênteses
	pairs := map[rune]rune{
		')': '(',
		'}': '{',
		']': '[',
	}

	// Pilha para rastrear os parênteses abertos
	stack := []rune{}

	// Itera sobre cada caractere na string
	for _, char := range s {
		if closing, exists := pairs[char]; exists {
			// Se for um parêntese de fechamento, verifica o topo da pilha
			if len(stack) == 0 || stack[len(stack)-1] != closing {
				return false // Fechamento inválido
			}
			// Remove o topo da pilha
			stack = stack[:len(stack)-1]
		} else {
			// Se for um parêntese de abertura, adiciona à pilha
			stack = append(stack, char)
		}
	}

	// Verifica se a pilha está vazia no final
	return len(stack) == 0
}

func main() {
	// Testes
	fmt.Println(isValid("()"))     // true
	fmt.Println(isValid("()[]{}")) // true
	fmt.Println(isValid("(]"))     // false
	fmt.Println(isValid("([)]"))   // false
	fmt.Println(isValid("{[]}"))   // true
}
