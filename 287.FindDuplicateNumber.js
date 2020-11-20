/*
287. Find the Duplicate Number  (Medium)

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one duplicate number in nums, return this duplicate number.

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

 // O(n) time and O(1) space. other way to solve it include set and simple iteration but they use O(n) space
var findDuplicate = function(nums) {
  // turtle and hare race by Floyd's law
  let turtle = nums[0];
  let hare = nums[0];
  do {
    //hare goes twice as fast as turtle and they will meet at same spot
      turtle = nums[turtle];
      hare = nums[nums[hare]];
  } while(turtle !== hare);
  //turtle gets second chance to race again start from beginning
  //hare git lazy and slows down
  turtle = nums[0];
  //keep looping until they meet! then return oen of them
  while (turtle !== hare) {
      turtle = nums[turtle];
      hare = nums[hare];
  }
  return hare;
};