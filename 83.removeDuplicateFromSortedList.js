/**
83. Remove Duplicates from Sorted List.  easy

Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
 */

/**
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 *
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return head;
  let cur = head;

  while (cur.next) {
      // has duplicate
      if (cur.val == cur.next.val) {
          cur.next = cur.next.next;
      } else {
          // important! we only move cursor forward if there's no duplicate
          cur = cur.next;
      }
  }
  return head;
};