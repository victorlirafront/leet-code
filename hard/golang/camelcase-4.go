package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"unicode"
)

func processData(input string) {
	lines := strings.Split(input, "\n")

	for _, line := range lines {
		line = strings.TrimSpace(line)
		parts := strings.Split(line, ";")
		action := parts[0]
		typ := parts[1]
		s := parts[2]

		if action == "S" {
			if typ == "M" {
				s = s[:len(s)-2] // Remove "()"
			} else if typ == "C" {
				s = string(unicode.ToLower(rune(s[0]))) + s[1:]
			}

			var result string
			for i, ch := range s {
				if unicode.IsUpper(ch) && i > 0 {
					result += " "
				}
				result += string(unicode.ToLower(ch))
			}
			fmt.Println(result)
		} else if action == "C" {
			words := strings.Split(s, " ")
			var result string
			for i, word := range words {
				if i == 0 && typ != "C" {
					result += strings.ToLower(word)
				} else {
					result += strings.Title(word)
				}
			}
			if typ == "M" {
				result += "()"
			} else if typ == "C" {
				result = strings.Title(result)
			}
			fmt.Println(result)
		}
	}
}

func main() {
	input := ""
	scanner := bufio.NewScanner(os.Stdin)

	for scanner.Scan() {
		input += scanner.Text() + "\n"
	}
	processData(input)
}
