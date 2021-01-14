/*
5. Longest Palindromic Substring  medium(high freq!)
*/
var longestPalindrome = function(s) {
  if (s.length < 2) return s;

  let start;
  let max = 0;
  function findPalindrome(s, left, right) {
    while(left >= 0 && right < s.length && s[left] == s[right]) {
      left--;
      right++;
    }
    if (max < right - left - 1) {
      start = left + 1; //add back one to get where current word starts since we subtracted one in while loop above
      max = right - left - 1;
    }
    return;
  }
  for (let i = 0; i < s.length-1; i++) {
    findPalindrome(s, i, i); //considering a odd input
    findPalindrome(s, i, i+1); // consider a even input
  }
  return s.substring(start, start+max);
  /* or */
  //return s.substr(start, maxLen) maxLen is num of characters to inclue in the returned str

};

console.log(longestPalindrome('cbbd'))