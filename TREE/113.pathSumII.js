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
  let res = [], let stack = [];
  function accmulate(root, curSum) {
    if (!root) return;

    if (!root.left && !root.right && curSum == sum) {
      let temp = [];
      for (let n of stack) temp.push(n);
      res.push(temp);
    }

    accmulate(root.left, curSum+root.val);
    accmulate(root.right, curSum+root.val);

    stack.pop();
  }
  accmulate(root, 0);
  return res;
};