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
  // store the result that is the max we have found so far
  let absMax = nums[0]; //handles edge case when nums only have one element in there and it's negative
  //putting nums[0] prevents absMax becoming 0 instead of what's really in nums[0]
  let maxPos = 1; //set the foundation nums to be 1 bc we dealing with multiplication
  let maxNeg = 1; // this way we preserve the first val, by * 1, will still be val itself
  for (let i = 0; i < nums.length; i++) {
    let temp = maxPos;
    //check if prev '+'num * cur bigger or prev '-'num
    // then check prev bigger result with curNum and get the maximum possible number to be our posMax!
    maxPos = Math.max(Math.max(maxNeg*nums[i], maxPos*nums[i]), nums[i]);
    maxNeg = Math.min(Math.min(maxNeg*nums[i], temp*nums[i]), nums[i]);
    absMax = Math.max(maxPos, absMax);
  }
  return absMax;
};

console.log(maxProduct([3,-1,2,6]));