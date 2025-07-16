package main

import (
	"fmt"
	"strings"
)

func fillSpaces(fill int, value string) string {
	return strings.Repeat(value, fill)
}

func staircase(n int) {
	for i := 1; i <= n; i++ {
		whiteSpaces := fillSpaces(n-i, " ")
		hashSpaces := fillSpaces(i, "#")
		fmt.Println(whiteSpaces + hashSpaces)
	}
}

func main() {
	staircase(6)
}
