// Math.sqrt é uma função em JavaScript que calcula a raiz quadrada de um número.

function isPrime(number: number): boolean {
  if (number <= 1) return false; // Números <= 1 não são primos

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Encontrou um divisor, não é primo
    }
  }

  return true; // Nenhum divisor encontrado, é primo
}

// Teste
const result = isPrime(10);
console.log(result); // false
