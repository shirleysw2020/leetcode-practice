/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  //Input: 1->2->3->4->5->NULL
  //Output: 5->4->3->2->1->NULL
  1->null
  let prev = null;
  while(head) {
    let cur = head;
    let next = head.next;
    cur.next = prev;
    head = next;
    prev = cur;
  }
  return prev;
};