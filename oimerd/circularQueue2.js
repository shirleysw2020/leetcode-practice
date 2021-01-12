class CircularQueue {
  constructor(k) {
      this.queue = new Array(k);
      this.size = k;
      this.front = 0;
      this.back  = -1;
      this.length = 0; //how many el in queue
  }
  enQueue(value) {
      if (this.isFull()) {
        return false;
      } else {
        this.back = (this.back + 1) % this.size;
        this.queue[this.back] = value;
        this.length++;
        return true;
      }
  }
  deQueue() {
      if (this.isEmpty()) {
        return false;
      } else {
        //simple assign front to be the next el, so that garbbage collection will take car of old front
        this.front = (this.front + 1) % this.size;
        this.length--;
        return true;
      }
  }
  Front() {
      return this.isEmpty() ? -1 : this.queue[this.front]
  }
  back() {
      return this.isEmpty() ? -1 : this.queue[this.back];
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


