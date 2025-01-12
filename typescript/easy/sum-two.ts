
function twoSum(nums: number[], target: number): number[] | null {
  const seen = new Map<number, number>(); // Map para armazenar valores já vistos

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    // Verifica se o complemento já está no Map
    if (seen.has(complement)) {
      return [seen.get(complement)!, i]; // Retorna os índices (o "!" indica que o valor não é `undefined`)
    }

    // Adiciona o número atual e seu índice ao Map
    seen.set(num, i);
  }

  return null; // Retorna null se não encontrar os índices
}

// Exemplo de uso
const result = twoSum([2, 7, 11, 15], 9);
console.log(result); // Saída: [0, 1]
