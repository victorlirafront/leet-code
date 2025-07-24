import java.util.HashSet;
import java.util.Set;

public class Main {

    public static void main(String[] args) {
        String s = "abcabcbb";
        int result = lengthOfLongestSubstring(s);
        System.out.println("Comprimento da maior substring sem caracteres repetidos: " + result);
    }

    public static int lengthOfLongestSubstring(String s) {
        Set<Character> seen = new HashSet<>();
        int start = 0;
        int maxLength = 0;

        for (int end = 0; end < s.length(); end++) {
            char c = s.charAt(end);

            // Se já tem esse caractere na janela, removemos do início até tirar ele
            while (seen.contains(c)) {
                seen.remove(s.charAt(start));
                start++;
            }

            seen.add(c);
            maxLength = Math.max(maxLength, end - start + 1);
        }

        return maxLength;
    }
}
