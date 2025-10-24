function letterCombinations(digits: string): string[] {
  if (!digits) return [];

  const map: Record<string, string> = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const result: string[] = [];

  function backtrack(index: number, current: string): void {
    if (index === digits.length) {
      result.push(current);
      return;
    }

    const letters = map[digits[index]];
    for (const char of letters) {
      backtrack(index + 1, current + char);
    }
  }

  backtrack(0, '');
  return result;
}

// Exemplos:
console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations(""));   // []
console.log(letterCombinations("2"));  // ["a","b","c"]
