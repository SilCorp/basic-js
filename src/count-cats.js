
module.exports = function countCats(matrix) {
  return matrix.flat().filter( item => item === '^^').length;
};
