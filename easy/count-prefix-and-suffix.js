// const words1 = ["a", "aba", "ababa", "aa"];
//eu preciso a primeira string com as seguintes e verificar se o prefixo e sulfixo são iguais
// e a segunda string (str2) deve ser maior ou igual à primeira string
// 1 - Criar a função que faz o laço no array
// 2 - Criar a variavel que conta as vezes que teve a ocorrência de pares
// 2 - Criar a função que valida os pares ( prefixo e sufixo ), e garante de a str2 é maior ou igual a str2

function isPrefixAndSuffix(string1, string2) {
  return (
    string2.startsWith(string1) &&
    string2.endsWith(string1) &&
    string2.length >= string1.length
  );
}

function countPrefixSuffixPairs(words) {
  let prefixAndSuffixCounter = 0;
  const wordsArrLength = words.length;

  for (let i = 0; i < wordsArrLength; i++) {
    for (let j = i + 1; j < wordsArrLength; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) {
        prefixAndSuffixCounter++;
      }
    }
  }

  return prefixAndSuffixCounter;
}

const words1 = ['a', 'aba', 'ababa', 'aa'];
console.log(countPrefixSuffixPairs(words1)); // Saída: 4

const words2 = ['pa', 'papa', 'ma', 'mama'];
console.log(countPrefixSuffixPairs(words2)); // Saída: 2

const words3 = ['abab', 'ab'];
console.log(countPrefixSuffixPairs(words3)); // Saída: 0