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
    } else if (index == numRows - 1) {
      step = -1;
    }
    index += step;
  }
  return res.join('');
};

P     A     Y
   1     2
  --->  --->
   3      4
  <---  <---
  /*
notice a pattern, we always fill the letters by numRows sections. Since numRows is 3 we breka into our result into 3 section as we fill them with letters

step1: starting with 0th row, then 1st row, 2nd row
step 2: once we hit 2nd row, always revert to 1st row, then 0th row.
And Repeat step 1 & 2.
  /*