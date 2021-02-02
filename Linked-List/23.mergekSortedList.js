/*
Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const merge = (l1, l2) => {
    if (!l1 || !l2) return l1 || l2;
    let node = {};
    const root = node;
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        node.next = l1;
        l1 = l1.next;
      } else {
        node.next = l2;
        l2 = l2.next;
      }
      node = node.next;
    }
    if (l1) node.next = l1;
    if (l2) node.next = l2;
    return root.next;
  }

  let root = lists[0];//need to assign it so we can save updates of merged root here.
  for (let i = 1; i < lists.length; i++) {
    root = merge(root, lists[i]);
  }

  return root || null;
};