function isValid(input: string): boolean {
  // Mapa para armazenar os pares de parênteses de fechamento e abertura
  const map: { [key: string]: string } = {
    ')': '(', // ')' precisa de '(' para ser válido
    '}': '{', // '}' precisa de '{' para ser válido
    ']': '[', // ']' precisa de '[' para ser válido
  };

  // Pilha para rastrear os parênteses de abertura
  const stack: string[] = [];

  // Percorre cada caractere da string
  for (const char of input) {
    if (char in map) { //valida de o caractere existe dentro do MAP 
      // Se o caractere for um parêntese de fechamento (')', '}', ']')

      // Remove o último elemento da pilha (o último parêntese de abertura)
      const topElement = stack.length > 0 ? stack.pop() : null;
      console.log("topElement", topElement)
      // Verifica se o parêntese de abertura combina com o de fechamento
      if (topElement !== map[char]) {
        return false; // Parêntese de fechamento inválido
      }
    } else {
      // Se o caractere for um parêntese de abertura ('(', '{', '[')
      stack.push(char); // Adiciona o parêntese de abertura na pilha
    }
  }

  // Verifica se todos os parênteses de abertura foram fechados corretamente
  // Se a pilha não estiver vazia, significa que faltam fechamentos
  return stack.length === 0;
}

// Testando a função com exemplos:

console.log(isValid("()"));       // true -> Parênteses balanceados
console.log(isValid("()[]{}"));   // true -> Todos os tipos balanceados e aninhados corretamente
console.log(isValid("(]"));       // false -> '(' não combina com ']'
console.log(isValid("([)]"));     // false -> Parênteses e colchetes estão mal aninhados
console.log(isValid("{[]}"));     // true -> Todos estão balanceados e bem aninhados
