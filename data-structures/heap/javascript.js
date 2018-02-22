// Max heap example : Array version
//  * Insert : O(log n) operations
//  * Extract : O(log n) operations

class Node {
  constructor(val) {
    this.value = val;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [null]
  }

  insert(value) {
    const newNode = new Node(value);
    this.heap.push(newNode);
    let nodeIndex = this.heap.length - 1;
    let parentIndex = Math.floor(nodeIndex / 2);
    while (this.heap[parentIndex] && newNode.value > this.heap[parentIndex].value) {
      const parent = this.heap[parentIndex];
      this.heap[parentIndex] = newNode;
      this.heap[nodeIndex] = parent;
      nodeIndex = parentIndex;
      parentIndex = Math.floor(nodeIndex / 2);
    }
  }

  remove() {
    if (this.heap.length < 3) {
      const toReturn = this.heap.pop();
      this.heap[0] = null;
      return toReturn;
    }
    const toRemove = this.heap[1];
    this.heap[1] = this.heap.pop();
    let currentIdx = 1;
    let [left, right] = [2*currentIdx, 2*currentIdx + 1];
    let currentChildIdx = this.heap[right] && this.heap[right].value >= this.heap[left].value ? right : left;
    while (this.heap[currentChildIdx] && this.heap[currentIdx].value <= this.heap[currentChildIdx].value) {
      let currentNode = this.heap[currentIdx]
      let currentChildNode = this.heap[currentChildIdx];
      this.heap[currentChildIdx] = currentNode;
      this.heap[currentIdx] = currentChildNode;
    }
    return toRemove;
  }

}
