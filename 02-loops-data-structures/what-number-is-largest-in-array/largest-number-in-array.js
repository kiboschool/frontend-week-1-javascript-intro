/**
 * largestNumberInArray - A function that finds the largest number in a given array of numbers.
 *
 * @param {number[]} arr - The input array of numbers
 * @returns {number} - The largest number in the input array
 *
 * Usage:
 * const result = largestNumberInArray([1, 2, 3]);
 * // Output: 3
 */
function largestNumberInArray(a) {
  let largest = a[0];
  for (let i of a) {
    if (i > largest) {
      largest = i
    }
  }
  return largest
}

module.exports = largestNumberInArray;
