package main

import (
	"fmt"
	"math"
)

// Função que verifica se um número é primo
func isPrime(number int) bool {
	if number <= 1 {
		return false // Números <= 1 não são primos
	}

	// Itera de 2 até a raiz quadrada do número
	for i := 2; i <= int(math.Sqrt(float64(number))); i++ {
		if number%i == 0 {
			return false // Encontrou um divisor, não é primo
		}
	}

	return true // Nenhum divisor encontrado, é primo
}

func main() {
	var result = isPrime(10)
	fmt.Println(result) // false
}
