/*
1249. Minimum Remove to Make Valid Parentheses

time and space:
O(n) O(n)

example:
ex1:
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

ex2:
input: "))(("
output: ""
*/

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let str = s.split('');
  let stack = [];
  for (var i = 0; i < str.length; i++) {
    if (s[i] == '(') {
      stack.push(i);
    } else if (s[i] == ')') {
      if (stack.length) {
        //there's matching param so we can cancel a pair out
        stack.pop();
      } else {
        //no matching param thats valid, we need to remove this param from str altogether!
        s[i] = '';
      }
    }
  }
  //take care of left over param in stack, they didn't have a ther pair to cancel them out
  for (let el of stack) str[el] = '';
  return str.join('');
};

