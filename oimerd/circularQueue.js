/*
Circular Queue OOD
The main benefit of circular queue is the memory, here we are reusing the unused blocks again and again.

- Circular queue is more efficient than Array Queue.
- Array size is fixed and it wont grow, the empty block created during dequeue operation is reused. - To implement circular queue, there's few enhancement on top of Array Queue implementation.

enqueue(el) — Add element to the back of the queue
dequeue() — Removing element from front of the queue
isEmpty()- Check whether the queue is empty
getFront() — Fetch the first element in the queue
clear() — Clear the queue
*/

class CircularQueue {
  constructor(size) {
   this.queue = [];
   this.size = size;
   this.length = 0;
   this.front = 0;
   this.back = -1;
  }
  isEmpty() {
    return (this.length == 0);
  }
  isFull() {
    return (this.back + 1 % this.size == this.front);
  }
  enqueue(element) {
    if (this.length >= this.size) throw (new Error("Maximum length exceeded"));
    this.back++;
    this.queue[this.back % this.size] = element;
    this.length++;
  }
  dequeue() {
    if (this.isEmpty()) throw (new Error("No elements in the queue"));
    const value = this.getFront();
    this.queue[this.front % this.size] = null;
    this.front++;
    this.length--;
    return value;
  }
  getFront() {
    if (this.isEmpty()) throw (new Error("No elements in the queue"));
    return this.queue[this.front % this.size];
  }
  clear() {
   this.queue = new Array()
   this.length = 0
   this.back = 0
   this.front = -1
  }
}

 let circleA = new CircularQueue(5);
 circleA.enqueue(1);
 circleA.enqueue(2);
 circleA.enqueue(3);
 circleA.enqueue(4);
 circleA.dequeue();
 circleA.enqueue(5);
 circleA.enqueue(6);