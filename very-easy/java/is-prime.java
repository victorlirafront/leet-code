// 🔢 Exemplos:
// 2 → só dá pra dividir por 1 e por 2 → ✅ É primo
// 3 → só dá pra dividir por 1 e por 3 → ✅ É primo
// 4 → dá pra dividir por 1, 2 e 4 → ❌ Não é primo
// 5 → só dá pra dividir por 1 e 5 → ✅ É primo
// 6 → dá pra dividir por 1, 2, 3 e 6 → ❌ Não é primo


public class Main {

    public static void main(String[] args){
        int number = 17;

        boolean isPrimeNumber = isPrime(number);

        if (isPrimeNumber) {
            System.out.println(number + " é primo.");
        } else {
            System.out.println(number + " não é primo.");
        }
    }

    public static boolean isPrime(int number){
        if (number <= 1) return false;
        if (number == 2) return true;

        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }

        return true;
    }
}
