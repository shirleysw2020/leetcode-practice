let heap = [null];

this.insert = function(num) {
  heap.push(num);
  if (heap.length > 2) {
    let idx = heap.length - 1;
    //while node we just inserted is less than it's direct parent
    while(heap[idx] < heap[Math.floor(idx/2)]) {
      // if it is not parent
      if (idx >= 1) {
        //swap node with parent. because we want parent to be the smallest of its child
        [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
        if (Math.floor(idx/2) > 1) {
          idx = Math.floor(idx/2);
        } else {
          break;
        }
      }
    }
  }
}
