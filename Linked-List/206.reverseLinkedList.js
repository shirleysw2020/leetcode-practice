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
let reverseList = function(head) {
  //Input: 1->2->3->4->5->NULL
  //Output: 5->4->3->2->1->NULL
  let prev = null;
  while (head) {
    let next = head.next;
    //update prev and head
    head.next = prev;

    prev = head;
    head = next;
  }
  return prev;
}

/* Recursion */

let reverseList = function(head) {
  if (head == null || head.next == null) return head;
  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
}

