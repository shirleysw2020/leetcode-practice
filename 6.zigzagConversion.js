/*
6. ZigZag Conversion  Medium

Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let res = [];
  let index = 0;
  let step = 0;

  for (let i = 0; i < s.length; i++) {
    if (res[index] == undefined) {
      res[index] = '';
    }
    res[index] += s[i];
    if (index == 0) {
      step = 1;
    } else if (index == numRos - 1) {
      step = -1;
    }
    index += step;
  }
  return res.join('');
};