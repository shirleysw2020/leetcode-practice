/*
543.Diam of Binary Tree easy

          1
         / \
        2   3
       / \
      4   5
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let res = 0;
  dfs(root);
  return res;
  function dfs(root) {
    if (!root) return 0;

    let l = dfs(root.left);
    let r = dfs(root.right);

    let res = Math.max(res, l+r);
    //only choose one from l and r, bc the length cannot be both
    return Math.max(l,r) + 1;
  }
};

