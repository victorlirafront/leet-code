//--- LEETCODE

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // Garante que nums1 seja o menor array
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const x = nums1.length;
  const y = nums2.length;

  let low = 0, high = x;

  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const minRightX = partitionX === x ? Infinity : nums1[partitionX];

    const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const minRightY = partitionY === y ? Infinity : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      // Verifica se o total de elementos é ímpar
      if ((x + y) % 2 === 1) {
        return Math.max(maxLeftX, maxLeftY);
      }
      // Total de elementos é par
      return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }

  throw new Error("Input arrays are not sorted");
}

// Testes
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.0

const nums3 = [1, 2];
const nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4)); // Output: 2.5
