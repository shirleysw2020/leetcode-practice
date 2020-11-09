/*
75. Sort Colors.    Medium

Share
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]
*/

// time complex: O(n)
// space complex: O(1) in-place operation

let sortColors = function(nums) {
  if (!nums || nums.length == 0) {
    return;
  }
  // [ 0 0 | 1 1 1 | 2 2 ]
  let i = 0;
  let j = 0;
  let k = nums.length - 1;
  // whie the border for end of 1s is lesser than or equal to border of 2s
  while (j <= k) {
    //if j is 0 swap with i
    if (nums[j] == 0) {
      swap(nums, i++, j++);
    //else increment j
    } else if (nums[j] == 1) {
      j++;
    //if j is 2 swap with k. j doesn't move becuase we need to check what we swapped form k and place where it belongs
    } else {
      swap(nums, j, k--);
    }
  }

  function swap(nums, i , j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
}

