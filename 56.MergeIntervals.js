// 56. Merge Intervals
/*
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let res = [intervals[0]];
  let sort = intervals.sort((a,b) => a[0] - b[0]);

  let count = 0;
  for (let i = 1; i < sort.length; i++) {
    if (sort[i][0] < res[count][1]) {
      if (sort[i][1] > res[count][1]) {
        //then merge
        res[count][1] = sort[i][1];
      }
    } else {
      res.push([sort[i]]);
      count++;
    }
  }
  return res;
};