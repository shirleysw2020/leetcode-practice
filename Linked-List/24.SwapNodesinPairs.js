/*
24. Swap Nodes in Pairs.  medium
*/

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
var swapPairs = function(head) {
  if (!head) return head;
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  while (prev.next && prev.next.next) {
      let first = prev.next;
      let second = prev.next.next;
      first.next = second.next;
      prev.next = second;
      // prev.next.next = first; //or below
      second.next = first;

      prev = prev.next.next;
  }
  return dummy.next;
};

// O(n) space and time