/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let output = 0;
  const num = String(n);
  for (let i = 0; i < num.length; i++) {
    output = num.slice(0, i) + num.slice(i + 1);
    if (max < output) {
      max = Number(output);
    }
  }
  return max;
}

module.exports = deleteDigit;
