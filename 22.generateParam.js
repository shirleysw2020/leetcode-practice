/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];
  function dfs(params, leftParam, rightParam) {
    if (params.length == 2*n) {
      res.push(params);
      return;
    }

    if (leftParam < n) {
      dfs(params+'(', leftParam + 1, rightParam);
    }
    if (leftParam > rightParam) {
      dfs(params+')', leftParam, rightParam + 1);
    }
  }
  dfs(params='', 0, 0)
  return res;
};