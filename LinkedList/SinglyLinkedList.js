class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFirst(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.size++;
    return this.traversing();
  }

  traversing() {
    let tempHead = this.head;
    const datas = [];
    while (tempHead) {
      datas.push(tempHead.data);
      tempHead = tempHead.next;
    }
    return datas;
  }

  addLast(data) {
    let tempHead = this.head;
    if (tempHead == null) {
      this.head = new Node(data);
    } else {
      while (tempHead.next) {
        tempHead = tempHead.next;
      }
      tempHead.next = new Node(data);
    }
    this.size++;
    return this.traversing();
  }

  insertAfter(data, prev) {
    let tempHead = this.head;
    while (tempHead && tempHead.data != prev) {
      tempHead = tempHead.next
    }
    if (tempHead != null) {
      const node = new Node(data);
      node.next = tempHead.next;
      tempHead.next = node;
      this.size++;
    }
    return this.traversing();
  }

  insertBefore(data, next) {
    let prevNode = null;
    let nextNode = this.head;
    while (nextNode && nextNode.data != next) {
      prevNode = nextNode;
      nextNode = nextNode.next;
    }
    if (prevNode == null && nextNode && nextNode.data == data) {
      const node = new Node(data);
      node.next = nextNode;
      this.head = node;
      this.size++;
    } else if (nextNode != null) {
      const node = new Node(data);
      node.next = nextNode;
      prevNode.next = node;
      this.size++;
    }
    return this.traversing();
  }

  delete(data) {
    let prevNode = null;
    let nextNode = this.head;
    while (nextNode && nextNode.data != data) {
      prevNode = nextNode;
      nextNode = nextNode.next;
    }
    if (prevNode == null && nextNode && nextNode.data == data) {
      let tempNode = nextNode.next;
      this.head = tempNode;
      tempNode = null;
      this.size--;
    } else if (nextNode != null) {
      prevNode.next = nextNode.next;
      this.size--;
    }
    return this.traversing();
  }

  copy() {
    let tempHead = this.head;
    let linkedList = new LinkedList();
    while (tempHead) {
      linkedList.addLast(tempHead.data);
      tempHead = tempHead.next;
    }
    return linkedList;
  }
}

module.exports = LinkedList;