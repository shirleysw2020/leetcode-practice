/*
98. Validate Binary Search Tree.
*//**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  // initialize min val as -infinity and max val as pos infinity
  return dfs(root, -Infinity, Infinity);

  function dfs(root, minVal, maxVal) {
    if (!root) return true;
    //root's val shouldn't be greater than it's right side value maxVal , these conditions outrules a BST
    if (root.val >= maxVal  || root.val <= minVal) return false;
    // keep searching on left and right
    // for left, min val is minVal wich is the current's root's minval, but max will be the root itself, because the root's left should be less thant he root itself
    return dfs(root.left, minVal, root.val) && dfs(root.right, root.val, maxVal);
  }
};