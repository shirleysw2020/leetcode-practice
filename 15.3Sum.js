/*
15. 3Sum

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

The solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 //intuition: have three pointers
var threeSum = function(nums) {
  let res = [];
  if (!nums || nums.length == 0) return [];

  nums.sort((a,b) => a-b);

  for (var i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break; //if first num is already greater than 0, impossible to sum to 0
    //rid of duplicates
    if (i > 0 && nums[i] === nums[i-1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) {
        left += 1;
      } else if (sum > 0) {
        right -= 1;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        // look at next one if it's duplicate, we skip
        while (left < right && nums[left] == nums[left+1]) {
          left++;
        }
        while(left < right && nums[right] == nums[right-1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return res;
};