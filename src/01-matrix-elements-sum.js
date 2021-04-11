/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const a = matrix.join(',').split(',').map((el) => el * 1);
  const b = a.map((el, i, arr) => {
    const newArr = arr;
    if (el === 0) {
      newArr[i + matrix[0].length] = 0;
    }
    return el;
  });
  return b.reduce((acc, el) => acc + el, 0);
}

module.exports = getMatrixElementsSum;
