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
