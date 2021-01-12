// max Heap
// class BinaryHeap {
//   constructor() {
//     this.heap = [30, 20, 10, 7, 9, 5];
//   }
//   //insert at the end of the heap which we represented with an array data structure
//   insert(value) {
//     this.heap.push(value);
//     this.bubbleUp();
//   }
//   bubbleUp() {
//     let index = this.heap.length - 1;
//     while (index > 0) {
//       let newEl = this.heap[index]; //new insert
//       let parentIdx = Math.floor((index-1)/2);
//       let parent = this.heap[parentIdx];
//       if (parent >= newEl) break;
//       this.heap[index] = parent; //it must be that parent < new insert
//       this.heap[parentIdx] = newEl;
//       index = parentIdx; //swap newEl index and parent index
//     }
//   }

//   extractMax() {
//     // remove max, and replace it with last el in heap, then sink Down to reorder
//     let max = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     this.sinkDown(0);
//     return max;
//   }
//   sinkDown(index) {
//     let left = 2 * index + 1; //leftchild
//     let right = 2 * index + 2; //rightchild
//     let largest = index; //temporarily largest
//     const length = this.heap.length;

//     //if left child is greater than parent
//     if (left < length && this.heap[left] > this.heap[largest]) {
//       largest = left;
//     }
//     //if right child is greater than parent
//     if (right < length && this.heap[right] > this.heap[largest]) {
//       largest = right;
//     }
//     //if equal means we never switched index of largest, no child was greater than node at index
//     if (largest !== index) { //if not euqal we eed to reorder by swapping
//       [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
//       this.sinkDown(largest);
//     }
//   }
// }

// let test = new BinaryHeap();
// test.insert(8);
// console.log(test)
// test.extractMax();
// console.log(test)
// test.insert(50);
// console.log(test)



//----------------- practice

class MaxHeapBinaryTree {
  constructor(value) {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    let newIndex = this.heap.length-1;
    this.bubbleUp(newIndex)

  }
  bubbleUp(index) {
    while (index > 0) {
      let newEl = this.heap[index];
      let parentIdx = Math.floor((index - 1)/2);
      let parent = this.heap[parentIdx];
      if (parent >= newEl) {
        break;
      } else { //swap
        this.heap[parentIdx] = newEl;
        this.heap[index] = parent;
        index = parentIdx;
      }
    }
  }
  extractMax() {
    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    let length = this.heap.length;
    this.sinkDown(0,length);
    return max;
  }
  sinkDown(index, length) { //use recursion
    let leftChild = (index * 2) + 1;
    let rightChild = (index * 2) + 2;
    let tempLargest = index;
    if (index < length && this.heap[index] < this.heap[leftChild]) {
      tempLargest = leftChild;
    }
    if (index < length && this.heap[index] < this.heap[rightChild]) {
      tempLargest = rightChild;
    }
    if (tempLargest !== index) {
      [this.heap[index], this.heap[tempLargest] = [this.heap[tempLargest], this.heap[index]]];
      sinkDown(tempLargest);
    } else {
      return;
    }
  }
}

let heap1 = new MaxHeapBinaryTree();
heap1.insert(3);
console.log(heap1);
heap1.insert(8);
heap1.insert(10);
heap1.extractMax();
heap1.insert(5);
console.log(heap1);
