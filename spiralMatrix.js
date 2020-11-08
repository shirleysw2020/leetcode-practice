/*

54. Spiral Matrix
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length == 0) return [];

  var res = [];
  var rowBegin = 0;
  var colBegin = 0;
  var rowEnd = matrix.length - 1;
  var colEnd = matrix.length - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {

//         move right
      for (var i = colBegin; i <= colEnd; i++) {
          res.push(matrix[rowBegin][i]);
      }
      rowBegin++;

//         move down
      for (var i = rowBegin; i <= rowEnd; i++) {
          res.push(matrix[i][colEnd]);
      }
      colEnd--;

//         move left
      if (rowBegin <= rowEnd) {
          for (var i = colEnd; i >= colBegin; i--) {
              res.push(matrix[rowEnd][i]);
          }

      }
      rowEnd--;

      if (colBegin <= colEnd) {
          for (var i = rowEnd; i >= rowBegin; i--) {
              res.push(matrix[i][colBegin]);
          }

      }
      colBegin++;
  }
  return res;

}