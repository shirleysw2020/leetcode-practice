/**
 * @param {number[]} nums
 * @return {number}
 */

 // Naive Solution: O(n2)
var maxProduct = function(nums) {

  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
      // pointer j is 1 plus i and j increase. when j goes until last num
      sum = nums[i];
      max = Math.max(sum, max);
      for (let j = i + 1; j < nums.length; j++) {
          // multiply by sum
          sum *= nums[j];
          // take max of max and sum
          max = Math.max(sum, max);
      }
  }
  return max;
}


var maxProduct = function(nums) {

  let absMax = nums[0];
  let posMax = 1, negMax = 1;

  for (let i = 0; i < nums.length; i++) {
      temp = posMax;
      posMax = Math.max(Math.max(posMax * nums[i], negMax * nums[i]), nums[i]);
      negMax = Math.min(Math.min(negMax * nums[i], temp * nums[i]), nums[i]);
      absMax = Math.max(posMax, absMax);
  }
  return absMax;
};