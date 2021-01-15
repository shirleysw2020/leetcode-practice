/*
 Example 1:

Input: nums = [34,23,1,24,75,33,54,8], k = 60
Output: 58
Explanation: We can use 34 and 24 to sum 58 which is less than 60.
Example 2:

Input: nums = [10,20,30], k = 15
Output: -1
Explanation: In this case it is not possible to get a pair sum less that 15.
*/
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