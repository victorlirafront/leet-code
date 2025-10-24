import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class LetterCombinations {
    public static List<String> letterCombinations(String digits) {
        if (digits == null || digits.isEmpty()) {
            return new ArrayList<>();
        }

        Map<Character, String> map = Map.of(
            '2', "abc",
            '3', "def",
            '4', "ghi",
            '5', "jkl",
            '6', "mno",
            '7', "pqrs",
            '8', "tuv",
            '9', "wxyz"
        );

        List<String> result = new ArrayList<>();
        backtrack(digits, 0, "", map, result);
        return result;
    }

    private static void backtrack(String digits, int index, String current,
                                  Map<Character, String> map, List<String> result) {
        if (index == digits.length()) {
            result.add(current);
            return;
        }

        String letters = map.get(digits.charAt(index));
        for (char c : letters.toCharArray()) {
            backtrack(digits, index + 1, current + c, map, result);
        }
    }

    public static void main(String[] args) {
        System.out.println(letterCombinations("23")); // [ad, ae, af, bd, be, bf, cd, ce, cf]
        System.out.println(letterCombinations(""));   // []
        System.out.println(letterCombinations("2"));  // [a, b, c]
    }
}
