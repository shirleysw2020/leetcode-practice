/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
  if (!root) return null;

  //if current node's valuse is already lower than low (which exist on left side in BST tree), its child nodes will def be lower and out of range as well. We just return calling trimBST on cur node's right instead.
  if (root.val < low) return trimBST(root.right, low, high); //2
  if (root.val > high) return trimBST(root.left, low, high);

  // we got here becaue cur node is within range
  root.left = trimBST(root.left, low, high); //3 //1
  root.right = trimBST(root.right, low, high);

  return root;
};