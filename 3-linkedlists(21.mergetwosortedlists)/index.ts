class ListNode {
    val: number;
    next: ListNode | null;
  
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  
  class Solution {
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
      const dummy = new ListNode(-1);
      let current = dummy;
  
      while (list1 && list2) {
        if (list1.val < list2.val) {
          current.next = list1;
          list1 = list1.next;
        } else {
          current.next = list2;
          list2 = list2.next;
        }
        current = current.next;
      }
  
      current.next = list1 ? list1 : list2;
  
      return dummy.next;
    }
  }
  
  // Criando a primeira lista: 1 -> 2 -> 4
  const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  
  // Criando a segunda lista: 1 -> 3 -> 4
  const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  
  // Criando a instância da solução
  const solution = new Solution();
  
  // Chamando mergeTwoLists
  const mergedList = solution.mergeTwoLists(list1, list2);
  
  function printList(head: ListNode | null) {
    let current = head;
    const values: number[] = [];
  
    while (current) {
      values.push(current.val);
      current = current.next;
    }
  
    console.log(values.join(" -> "));
  }
  
  // Usando a função para imprimir a lista mesclada
  printList(mergedList);