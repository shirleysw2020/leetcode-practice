/**
 1099. Two Sum Less Than K

 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var twoSumLessThanK = function(A, K) {
  let count = -1;
  if (A.length == 1) return count;

  let sort = A.sort((a,b) => {
      return a-b
  });
  if (A[0] >= K) return -1;

  let i = 0;
  let j = A.length - 1;
  while (j > i) {
      if (A[i] + A[j] < K) {
          count = Math.max(count, A[i] + A[j]);
          i++;
      } else {
          j--;
      }
  }

  return count;
};