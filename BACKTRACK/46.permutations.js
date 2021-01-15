/*
46. Permutations. Medium

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];
  if(nums.length == 0) return res;

  function permutation(arr) {
    if (nums.length == arr.length) {
      res.push(arr);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!arr.includes(nums[i])) {
        permutation([...arr, nums[i]]);
      }
    }
  }
  permutation([]);
  return res;
}

console.log(permute([1,2,3]));