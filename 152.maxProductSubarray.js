/*
152. Maximum Product Subarray medium
Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let absMax = nums[0];
  let maxPos = 1;
  let maxNeg = 1;
  for (let i = 0; i < nums.length; i++) {
    let temp = maxPos;
    maxPos = Math.max(Math.max(maxNeg*nums[i], maxPos*nums[i]), nums[i]);
    maxNeg = Math.min(Math.min(maxNeg*nums[i], temp*nums[i]), nums[i]);
    absMax = Math.max(maxPos, absMax);
  }
  return absMax;
};