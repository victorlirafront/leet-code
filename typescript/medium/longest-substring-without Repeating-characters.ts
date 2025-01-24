// Passos do Algoritmo:
// Use a técnica de "Janela Deslizante" (Sliding Window):

// Imagine que você tem uma "janela" (um pedaço da string) que vai crescendo ou se movendo, dependendo das condições.
// A ideia é manter essa janela sem caracteres repetidos.
// Use um conjunto ou mapa para rastrear os caracteres únicos na janela:

// Isso ajuda a verificar rapidamente se um caractere já existe na janela.
// Variáveis importantes:

// start: Marca o início da janela.
// maxLength: Armazena o comprimento máximo da substring encontrada até agora.
// seen: Um mapa ou conjunto para rastrear os caracteres na janela atual.
// Itere sobre a string:

// Para cada caractere, verifique se ele já está na janela.
// Se estiver, mova o início da janela (start) até que o caractere repetido saia dela.
// Sempre atualize o comprimento máximo com o tamanho da janela atual.


function lengthOfLongestSubstring(s) {
  let seen = new Set(); // Para rastrear caracteres únicos na janela
  let start = 0; // Início da janela
  let maxLength = 0; // Comprimento máximo encontrado

  for (let end = 0; end < s.length; end++) {
      while (seen.has(s[end])) {
          seen.delete(s[start]); // Remove o caractere do início
          start++; // Move o início da janela
      }
      seen.add(s[end]); // Adiciona o caractere atual
      maxLength = Math.max(maxLength, end - start + 1); // Atualiza o máximo
  }

  return maxLength; // Retorna o comprimento da maior substring
}
