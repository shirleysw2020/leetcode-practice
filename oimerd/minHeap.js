// max Heap
class MinHeap {
  constructor() {
    this.heap = [2,5, 5, 6, 7, 8, 9];
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let newEl = this.heap[index]; //new insert
      let parentIdx = Math.floor((index-1)/2);
      let parent = this.heap[parentIdx];
      if (parent <= newEl) break;
      this.heap[index] = parent; //it must be that parent is less than new insert
      this.heap[parentIdx] = newEl;
      index = parentIdx; //swap newEl index and parent index
    }
  }

  extractMin() {
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }
  sinkDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;
    const length = this.heap.length;
    //we want min val to have priority
    //if left child is lesser than parent
    if (left < length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    //if right child is lesser than left /or/ smallest
    if (right < length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    //if they are equal that means we never switched index of smallest, no child was greater than node at index
    if (smallest !== index) {
      //swap
      [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
      this.sinkDown(smallest);
    }
  }
}

let test = new MinHeap();
console.log(test)
test.insert(5);
console.log(test.extractMin());
test.insert(8);
// test.insert(4);
// test.insert(6);
// test.insert(5);
console.log(test)
console.log(test.extractMin());
