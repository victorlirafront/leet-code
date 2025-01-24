function isValid(s: string): boolean {
  // Mapa para armazenar os pares de parênteses
  const map: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  // Pilha para rastrear os parênteses abertos
  const stack: string[] = [];

  // Percorre cada caractere da string
  for (const char of s) {
    if (char in map) {
      // Se o caractere for um parêntese de fechamento
      const topElement = stack.length > 0 ? stack.pop() : null;
      if (topElement !== map[char]) {
        return false; // Fechamento inválido
      }
    } else {
      // Se o caractere for um parêntese de abertura
      stack.push(char);
    }
  }

  // Verifica se a pilha está vazia (todos os parênteses foram fechados corretamente)
  return stack.length === 0;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
