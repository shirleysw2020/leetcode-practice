/*
226. Invert Binary Tree

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

const invertTree(root) {
  if (!root) return null;

  let left = invertTree(root.left);
  let right = invertTree(root.right);

  root.left = right;
  root.right = left;
  return root;
};