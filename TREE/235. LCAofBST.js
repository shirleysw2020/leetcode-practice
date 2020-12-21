235. Lowest Common Ancestor of a Binary Search Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
//worse case time comp; O(n)
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

  if (p.val < root.val && q.val < root.val) {
    lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};