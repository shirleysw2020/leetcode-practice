
/*
34. Find First and Last Position of Element in Sorted Array

http://sephoraleetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
*/

//technique: binary search, divide and conquer.

// - - - - -  METHOD 1: separate concerns - - - - // 27 lines
var searchRange = function(nums, target) {
  let result = [-1, -1];
  if (!nums.length) return result;
  let mid = Math.floor(nums.length/2);
  let start, end;

  if (target == nums[mid]) {
      start = mid;
      end = mid;
      while (nums[start] == target) start--;
      while (nums[end] == target) end++;
      return [start + 1, end - 1];
  }
  if (target > nums[mid]) return spanOut(target, mid + 1, nums.length - 1);
  if (target < nums[mid]) return spanOut(target,0 ,mid - 1);
};

let spanOut = function(target, start, end) {
    while (nums[start] !== target) {
        start++;
        if (start > end) return [-1,-1];
    }
    while (nums[end] !== target) {
        end--;
        if (end < start) return [-1,-1];
    }
    return [start, end];
};

// - - - - -  METHOD 2: More concise - - - - //23 lines
var searchRange = function(nums, target) {
    let result = [-1, -1];
    let i = 0, j = nums.length - 1;
    while(i <= j) {
        let mid = Math.floor((i + j) / 2)
        if(nums[mid] < target) {
            i = mid + 1
        } else if(nums[mid] > target) {
            j = mid - 1
        } else {
            let left = mid, right = mid
            while(nums[left] === target && left >= 0) {
                left -= 1
            }
            result[0] = left + 1
            while(nums[right] === target && right < nums.length) {
                right += 1
            }
            result[1] = right - 1
            return result
        }
    }
    return result
};