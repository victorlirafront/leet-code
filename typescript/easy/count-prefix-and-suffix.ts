function isPrefixAndSuffix(string1: string, string2: string): boolean {
  return (
    string2.startsWith(string1) &&
    string2.endsWith(string1) &&
    string2.length >= string1.length
  );
}

function countPrefixSuffixPairs(words: string[]): number {
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

// Testando com diferentes casos
const words1 = ['a', 'aba', 'ababa', 'aa'];
console.log(countPrefixSuffixPairs(words1)); // Saída: 4

const words2 = ['pa', 'papa', 'ma', 'mama'];
console.log(countPrefixSuffixPairs(words2)); // Saída: 2

const words3 = ['abab', 'ab'];
console.log(countPrefixSuffixPairs(words3)); // Saída: 0
