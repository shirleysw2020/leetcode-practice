236. Lowest Common Ancestor of a Binary Tree

var lowestCommonAncestor = function(root, p, q) {
  // if no more node, or we found one of the node, just return it, stop look further on
  if (!root || root.val == q.val || root.val == q.val) {
    return root;
  }
  let left = lowestCommonAncestor(root.left);
  let right = lowestCommonAncestor(root.right);

  if (left && right) return root;
  return left ? left : right;
};