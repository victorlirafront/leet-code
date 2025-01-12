function diagonalDifference(arr: number[][]) {
  let diagonalLeft = 0;
  let diagonalRight = 0;
  const arrayLength = arr.length; // Mantém a variável constante

  for (let i = 0; i < arrayLength; i++) {
      diagonalLeft += arr[i][i]; // Soma na diagonal principal (esquerda para direita)
      diagonalRight += arr[i][arrayLength - 1 - i]; // Soma na diagonal secundária (direita para esquerda)
  }

  // Retorna a diferença absoluta entre as duas diagonais
  return Math.abs(diagonalLeft - diagonalRight);
}

const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

console.log(diagonalDifference(matrix)); // Saída: 15