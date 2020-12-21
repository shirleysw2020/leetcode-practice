/**
 * @param {number} capacity
 */
class DoublyLinkedList {
  constructor () {
      this.head = null;
      this.tail = null;
  }
  insertHead(node) { //adding new node will land at most recent spot
      if (!this.head) {
          this.head = node;
          this.tail = node;
      } else { //set node as new head and connect with old head
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
      }
  }
  moveToHead(node) { //after operation the node move to most recent spot
      if (node === this.head) return;
      if (node === this.tail) {
        node.next = this.head;
        this.head.prev = node;
        this.tail = node.prev;
        node.prev.next = null;
        node.prev = null;
      } else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = this.head;
        node.next.prev = node;
        node.prev = null
      }
      this.head = node;
  }
  removeTail() { //if exceed capacity, remove from tail - least recently used
      let evict = this.tail;
      if (evict.prev !== null && this.tail != this.head) {
        evict.prev.next = null;
        this.tail = evict.prev;
      } else {
        this.tail = null;
        this.head = null;
      }
      return evict.key;
  }
};

class Node {
  constructor(key, val) {
      this.val = val;
      this.key = key;
      this.next = null;
      this.prev = null;
  }
};

class LRUCache {
  constructor(capacity) {
      this.map = new Map();
      this.capacity = capacity;
      this.LL = new DoublyLinkedList();
      this.size = 0;
  }

/**
* @param {number} key @return {number}
*/
  get(key) {
    if (this.map.has(key)) {
        let getNode = this.map.get(key);
        this.LL.moveToHead(getNode); //node
        return this.map.get(key).val;
    }
    return -1;
  };
/**
* @param {number} key @param {number} value
* @return {void}
*/
  put(key, value) {
      if (this.map.has(key)) { //exist
          this.map.get(key).val = value; //update value
          this.LL.moveToHead(this.map.get(key)); //update recentness
          return;
      } else { // does not exist
          const newNode = new Node(key, value); //make new node
          if (this.size < this.capacity) { //within capacity
              this.size++;
          } else { //reached capacity
              const keyToRemove = this.LL.removeTail(); //remove least recent
              this.map.delete(keyToRemove); // delete the key
          }
          this.LL.insertHead(newNode);
          this.map.set(key, newNode); // add new node to map
      }
  }
};
/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

// class LRUCache {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.map = new Map();
//   }

//   get(key) {
//     let val = this.map.get(key);
//     if (typeof val === 'undefined') { return -1 }
//     this.map.delete(key);
//     this.map.set(key, val);
//     return val;
//   }

//   put(key, value) {
//     if (this.map.has(key)) { this.map.delete(key) }
//     this.map.set(key, value);
//     let keys = this.map.keys();
//     while (this.map.size > this.capacity) { this.map.delete(keys.next().value) }
//   }
// }