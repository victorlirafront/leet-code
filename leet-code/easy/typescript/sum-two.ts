function twoSum(nums: number[], target: number): number[] | null {
  const seen = new Map<number, number>(); // Map to store already seen values

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    // Checks if the complement is already in the Map
    if (seen.has(complement)) {
      return [seen.get(complement)!, i]; // Returns the indices (the "!" indicates that the value is not `undefined`)
    }

    // Adds the current number and its index to the Map
    seen.set(num, i);
  }

  return null; // Returns null if no indices are found
}

// Example usage
const sumResult = twoSum([2, 7, 11, 15], 9);
console.log(sumResult); // Output: [0, 1]
