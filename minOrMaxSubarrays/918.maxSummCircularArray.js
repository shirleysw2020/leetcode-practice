/*
Given a circular array C of integers represented by A, find the maximum possible sum of a non-empty subarray of C.

Here, a circular array means the end of the array connects to the beginning of the array.  (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)

Also, a subarray may only include each element of the fixed buffer A at most once.  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)

Example 1:

Input: [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3
*/

/*
Two corner cases:

A. when the max subarray occurs by wrapping over the array,
then we can add up all num in array and subtract the min subarray
 ------- total- min ------

B. when all numbers in array are negative. just return max
*/
let findMaxSubarry = (arr) => {
  let tempMax = 0;
  let tempMin = 0;
  let max = -Infinity;
  let min = Infinity;
  let total = 0;
  for (let num of arr) {
    total += num;
    // does accumulating prev + cur  give us largest or only cur
    tempMax = Math.max(num, tempMax+num);
    // does accumulating prev + cur  give us lesser or only cur
    tempMin = Math.min(num, tempMin+num);
    max = Math.max(max, tempMax);
    min = Math.min(min, tempMin);
  }
  //wrap around property we can use total-min to get max subarray
  return (total > 0) ? Math.max(max, total - min) : max;
}

let arr = [1,-2,3,-2];
console.log(findMaxSubarry(arr));