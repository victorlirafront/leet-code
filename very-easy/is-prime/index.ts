// A prime number is an integer greater than 1 that can only be divided by 1 and by itself, without leaving a remainder.
// In other words, it has no divisors other than 1 and itself.
// Examples of prime numbers:
// 2: can only be divided by 1 and 2.
// 3: can only be divided by 1 and 3.
// 5: can only be divided by 1 and 5.
// 7: can only be divided by 1 and 7.

function isPrime(number: number): boolean {
  // Numbers less than or equal to 1 are not prime by definition
  if (number <= 1) return false;

  // Iterate from 2 to the square root of the number
  // It is unnecessary to check beyond the square root, because any divisor larger
  // will have a corresponding smaller pair less than the square root
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // Checks if 'number' is divisible by 'i'
    // If it is divisible, it means 'number' is not prime
    if (number % i === 0) {
      return false;
    }
  }

  // If no divisor was found in the loop, the number is prime
  return true;
}

const result = isPrime(16);
