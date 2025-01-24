package main

import "fmt"

// Definição do nó da lista ligada
type ListNode struct {
	Val  int
	Next *ListNode
}

// Função para mesclar duas listas ordenadas
func mergeTwoLists(list1, list2 *ListNode) *ListNode {
	// Nó dummy para facilitar a construção da lista resultante
	dummy := &ListNode{}
	current := dummy

	// Enquanto ambas as listas têm elementos
	for list1 != nil && list2 != nil {
		if list1.Val <= list2.Val {
			current.Next = list1 // Conecta o nó de list1
			list1 = list1.Next   // Avança em list1
		} else {
			current.Next = list2 // Conecta o nó de list2
			list2 = list2.Next   // Avança em list2
		}
		current = current.Next // Avança no ponteiro da lista resultante
	}

	// Conecta os nós restantes de list1 ou list2
	if list1 != nil {
		current.Next = list1
	} else {
		current.Next = list2
	}

	// Retorna a lista mesclada, ignorando o nó dummy inicial
	return dummy.Next
}

// Função para criar uma lista ligada a partir de um slice
func arrayToList(arr []int) *ListNode {
	dummy := &ListNode{}
	current := dummy
	for _, val := range arr {
		current.Next = &ListNode{Val: val}
		current = current.Next
	}
	return dummy.Next
}

// Função para imprimir uma lista ligada
func printList(node *ListNode) {
	for node != nil {
		fmt.Print(node.Val)
		if node.Next != nil {
			fmt.Print(" -> ")
		}
		node = node.Next
	}
	fmt.Println()
}

func main() {
	// Listas de entrada
	list1 := arrayToList([]int{1, 2, 4})
	list2 := arrayToList([]int{1, 3, 4})

	// Mesclar as listas
	mergedList := mergeTwoLists(list1, list2)

	// Imprimir o resultado
	printList(mergedList)
}
