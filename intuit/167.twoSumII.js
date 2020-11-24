 /*
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

//time: O(n) space: O(1) - only store 2 indexes.
var twoSum = function(numbers, target) {
    let res = [];
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        } else {
            res[0] = left+1;
            res[1] = right+1;
            return res;
        }
    }
};