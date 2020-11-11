236. Lowest Common Ancestor of a Binary Tree

var lowestCommonAncestor = function(root, p, q) {
  //base case is if we found the node equal to p or q or root is null
  if (!root || root.val == q.val || root.val == q.val) {
    return root;
  }

  let left = lowestCommonAncestor(root.left);
  let right = lowestCommonAncestor(root.right);

  if (left && right) return root;
  return left ? left : right;
};