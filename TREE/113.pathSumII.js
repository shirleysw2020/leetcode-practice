/*
Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:
[
   [5,4,11,2],
   [5,8,4,5]
]
*/

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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let res = [], stack = [];
  function accumulateSum(root, curSum) {
    if(!root) return;

    stack.push(root.val)
    curSum += root.val;
    // make sure current node is leaf node and reched sum
    if (!root.left && !root.right && sum == curSum) {
      let temp = [];
      for (let node of stack) {
        temp.push(node);
      }
      res.push(temp);
    }

    if (root.left) accumulateSum(root.left, curSum);
    if (root.right) accumulateSum(root.right, curSum);
    stack.pop();
  }
  accumulateSum(root, 0);
  return res;
};