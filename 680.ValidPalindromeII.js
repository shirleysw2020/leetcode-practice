/*

680. Valid Palindrome II  (easy)
return boolean whether a string can become  a palindrome is one letter was removed
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j && s[i] == s[j]) {
    i++;
    j++;
  }

  if (i >= j) {return true}
  // try same palindorm check process by looking at one index ahead or behind
  if (deleteOne(s, i+1, j) || deleteOne(s, i, j-1)) {
    retuen true;
  } else {
    return false;
  }

  function deleteOne(s, i, j) {
    while (i < j) {
      if (s[i] !== s[j]) return false; //end early
      i++;
      j++;
    }
    return true;
  }

};