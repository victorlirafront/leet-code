function miniMaxSum(arr) {
  // Ordena o array em ordem crescente
  arr.sort((a, b) => a - b);

  // Calcula a soma mínima (exclui o maior número) e a soma máxima (exclui o menor número)
  const minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);
  const maxSum = arr.slice(1).reduce((sum, num) => sum + num, 0);

  // Exibe os resultados
  console.log(minSum, maxSum);
}

// Exemplo de entrada
const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr); // Saída esperada: 10 14
