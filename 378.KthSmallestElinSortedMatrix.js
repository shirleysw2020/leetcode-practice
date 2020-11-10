378. Kth Smallest Element in a Sorted Matrix

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  // VISUALIZE EVERY STEP:
  // let joined = matrix.join(','); //'1,5,9'
  // let split = joined.split(','); //['1', '5', '9']
  // let toNumber = split.map(x => Number(x)); // [1,5,9]
  // let sort = toNumber.sort((a, b) => (a - b))[k - 1]; // k - 1 bc 0 indexed
  // return sort;

  let toNumber = matrix.join(',').split(',').map(str => {
      return Number(str);
  });
  return toNumber.sort((a,b) => (a-b))[k-1];

  //second method:
  //return [].concat(...matrix).sort((a,b) => {return a-b})[k-1]
};

