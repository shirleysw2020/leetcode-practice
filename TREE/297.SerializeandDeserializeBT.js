/**
 * Definition for a binary tree node.
  class TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
*/

/**
 * Encodes a tree to an array.
 * @param {TreeNode} root
 * @return {array}
 */
let serializeTree = (root) => {
  let res = [];
  buildArray(root);
  return res;
}

let buildArray = (node) => {
  //use pre-order traversal
  if (!node) return;
  res.push(node.val);
  if (node.left) buildArray(node.left);
  if (node.right) buildArray(node.right);
}


/**
 * Decodes your encoded data to tree.
 * @param {array} data
 * @return {TreeNode}
 */
let deserializeTree = (data) => {
  return (data) ? buildTree(data) : [];
}

let buildTree = (queue) => {
  let curNode = queue.shift();
  if (curNode == null) return null;
  let newNode = new TreeNode(curNode.val);
  newNode.left = buildTree(queue);
  newNode.right = buildTree(queue);
  return newNode
}

/**
 * Your functions will be called as such:
 *
 * deserialize(serialize(root));
*/