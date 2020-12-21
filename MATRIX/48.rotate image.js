// matrix = [[1,2,3],
          // [4,5,6],
          // [7,8,9]]
// Output: [[7,4,1],
        // [8,5,2],
        // [9,6,3]]

var rotate = function(matrix) {
  //method1
  let size = matrix.length;
  for (var i = 0; i < Math.floor(size/2); i++) {
    for (var j = 0; j < size-i-1; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[size-j-1][i];
      matrix[size-j-1][i] = matrix[size-i-1][size-1-j];
      matrix[size-i-1][size-1-j] = matrix[j][size-1-i];
      matrix[j][size-1-i] = temp;
    }
  }
  //method2: reverse rows. Then first row becomes first col, second row become second col... etc.
  matrix.reverse();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
};