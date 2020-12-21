/*
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/

var longestCommonPrefix = function(arr) {
  let prefix = arr[0]; //first word

  for (let i = 1; i < arr.length; i++) { //2nd word
    console.log(arr[i].indexOf(prefix, 'prefix'));
      while (arr[i].indexOf(prefix) != 0) {
        prefix = prefix.substring(0, prefix.length-1);
      }
  }
  return prefix;
};
let arr = ["dog","racecar","car"];
console.log(longestCommonPrefix(arr));