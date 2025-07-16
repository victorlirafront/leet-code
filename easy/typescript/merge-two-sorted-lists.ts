
type ListNode = {
  val: number;
  next: ListNode | null;
};

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Nó dummy para facilitar a construção da lista mesclada
  const dummy: ListNode = { val: 0, next: null };
  let current = dummy;

  // Enquanto ambas as listas têm elementos
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1; // Conecta o nó de list1
      list1 = list1.next;   // Avança em list1
    } else {
      current.next = list2; // Conecta o nó de list2
      list2 = list2.next;   // Avança em list2
    }
    current = current.next; // Move o ponteiro da lista resultante
  }

  // Conecta os nós restantes de list1 ou list2
  current.next = list1 || list2;

  // Retorna a lista mesclada, ignorando o nó dummy inicial
  return dummy.next;
}

// Função para criar uma lista ligada a partir de um array
function arrayToList(arr: number[]): ListNode | null {
  const dummy: ListNode = { val: 0, next: null };
  let current = dummy;
  for (const val of arr) {
    current.next = { val, next: null };
    current = current.next;
  }
  return dummy.next;
}

// Função para imprimir uma lista ligada
function printList(node: ListNode | null): void {
  const result: number[] = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  console.log(result.join(" -> "));
}

// Listas de entrada
const list1 = arrayToList([1, 2, 4]);
const list2 = arrayToList([1, 3, 4]);

// Mesclar as listas
const mergedList = mergeTwoLists(list1, list2);

// Imprimir o resultado
printList(mergedList);
