/**
 * countVowelsInString - A function that counts the number of vowels in a given string.
 *
 * @param {string} str - The input string
 * @returns {number} - The number of vowels in the input string
 *
 * Usage:
 * const result = countVowelsInString("Hello, World!");
 * // Output: 3
 */

let VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E','I', 'O', 'U'])

function countVowelsInString(s) {
  let count = 0;
  for (let char of s) {
    if (VOWELS.has(char)) {
      count += 1;
    }
  }
  return count
}

module.exports = countVowelsInString;
