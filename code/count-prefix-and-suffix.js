// const words1 = ["a", "aba", "ababa", "aa"];

//eu preciso a primeira string com as seguintes e verificar se o prefixo e sulfixo são iguais 
// e a segunda string (str2) deve ser maior ou igual à primeira string



// Função que verifica se str1 é prefixo e sufixo de str2
function isPrefixAndSuffix(str1, str2) {
  return str2.startsWith(str1) && str2.endsWith(str1);
}

// Função para contar os pares válidos
function countPrefixSuffixPairs(words) {
  let count = 0;
  const n = words.length;

  // Itera sobre todos os pares (i, j) onde i < j
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) {
        count++;
      }
    }
  }
  
  return count;
}


// Exemplo 1
const words1 = ["a", "aba", "ababa", "aa"];
console.log(countPrefixSuffixPairs(words1));  // Saída: 4

// Exemplo 2
const words2 = ["pa", "papa", "ma", "mama"];
console.log(countPrefixSuffixPairs(words2));  // Saída: 2

// Exemplo 3
const words3 = ["abab", "ab"];
console.log(countPrefixSuffixPairs(words3));  // Saída: 0

// Caso 2: words2 = ["pa", "papa", "ma", "mama"]
// Pares válidos:

// (0, 1): "pa" é prefixo e sufixo de "papa".
// (2, 3): "ma" é prefixo e sufixo de "mama".


// (0, 1): "a" é prefixo e sufixo de "aba".
// (0, 2): "a" é prefixo e sufixo de "ababa".
// (0, 3): "a" é prefixo e sufixo de "aa".
// (1, 2): "aba" é prefixo e sufixo de "ababa".