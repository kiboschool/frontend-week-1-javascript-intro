/**
 * countSpacesInString - A function that counts the number of spaces in a given string.
 *
 * @param {string} str - The input string
 * @returns {number} - The number of spaces in the input string
 *
 * Usage:
 * const result = countSpacesInString("Hello, World!");
 * // Output: 1
 */
function countSpacesInString(str) {
  let count = 0;
  for (let char of str) {
    if (char == " ") {
      count += 1
    }
  }
  return count
}

module.exports = countSpacesInString;
