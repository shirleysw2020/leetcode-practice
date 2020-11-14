/*
430. Flatten a Multilevel Doubly Linked List

*/

var flatten = function(head) {
  if (!head) return head;
  let parent = head;

  //parent will be our 'travel node'
  while (parent) {
    // keep updating parent until it has a child
    // child is where to start flattening.
    if (parent.child == null) {
      parent = parent.next;
      continue;
    }
    let temp = parent.child;
    while(temp.next) {
      temp = temp.next;
    }
    // connect child's last next with parent's original next
    temp.next = parent.next;
    if (parent.next) {
      parent.next.prev = temp;
    }

    //rid of parent's connection with child
    parent.next = parent.child;
    parent.child.prev = parent;
    parent.child = null;
  }
  return head;
};