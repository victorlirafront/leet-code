// Um Map é uma estrutura de dados do JavaScript que armazena pares chave-valor, onde as chaves podem ser de qualquer tipo
// (não apenas strings, como em objetos). Ele oferece algumas vantagens sobre objetos tradicionais e é muito útil quando você precisa de um armazenamento 
// de dados que preserve a ordem de inserção e aceite tipos de dados variados como chave.

const twoSum = function (nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(num, i);
  }

  return null;
};

const result = twoSum([2, 7, 11, 15], 9);

console.log(result);
