/*
20. Valid Parentheses.  (easy)

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  let map = {
    '(' : ')',
    '{' : '}',
    '[': ']'
  };

  for (var i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
      stack.push(s[i]);
    } else {
      let last = stack.pop();
      if (s[i] !== map[last]) {
        return false;
      }
    }
  }
  return stack.length ? false : true;
};