class CircularQueue {
  constructor(k) {
      this.queue = new Array(k);
      this.size = k;
      this.rear  = -1;
      this.front = 0;
      this.length = 0; //how many el in queue
  }
  enQueue(value) {
      if (this.isFull()) {
        return false;
      } else {
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
        this.length++;
        return true;
      }
  }
  deQueue() {
      if (this.isEmpty()) {
        return false;
      } else {
        this.front = (this.front + 1) % this.size;
        this.length--;
        return true;
      }
  }
  Front() {
      return this.isEmpty() ? -1 : this.queue[this.front]
  }
  Rear() {
      return this.isEmpty() ? -1 : this.queue[this.rear];
  }
  isEmpty() {
      return this.length === 0;
  }
  isFull() {
      return this.length === this.size;
  }
}

let circleA = new CircularQueue(5);
circleA.enQueue(1);
circleA.enQueue(2);
circleA.enQueue(3);
circleA.enQueue(4);
circleA.deQueue();
circleA.enQueue(5);
circleA.enQueue(6);


