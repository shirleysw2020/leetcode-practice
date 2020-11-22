/*
5. Longest Palindromic Substring  medium(high freq!)
*/
let start;
let max = 0;
var longestPalindrome = function(s) {
  if (s.length < 2) return s;

  for (let i = 0; i < s.length; i++) {
    findPalindrome(s, i, i); //considering a odd input
    findPalindrome(s. i, i+1); // consider a even input
  }
  return s.substr(start, max);

  function findPalindrome(s, left, right) {
    while(right >= 0 && s[left] == s[right]) {
      left++;
      right--;
    }
    if (right - left + 1 > max) {
      start = left - 1;
      max = right - left + 1;
    }
  }
};