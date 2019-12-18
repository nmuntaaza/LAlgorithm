class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFirst(data) {
    const node = new Node(data);
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
    this.size++;
    return this.traversing();
  }

  addLast(data) {
    const node = new Node(data);
    let currentNode = this.head;
    if (currentNode == null) {
      this.head = node;
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      node.prev = currentNode;
    }
    this.size++;
    return this.traversing();
  }

  traversing() {
    let currentNode = this.head;
    const datas = [];
    while (currentNode) {
      datas.push(currentNode.data);
      currentNode = currentNode.next
    }
    return datas;
  }

  insertAfter(data, prev) {
    const node = new Node(data);
    let currentNode = this.head;
    while (currentNode && currentNode.data != prev) {
      currentNode = currentNode.next;
    }
    if (currentNode != null) {
      node.next = currentNode.next;
      node.prev = currentNode;
      if (currentNode.next) {
        currentNode.next.prev = node;
      }
      currentNode.next = node;
      this.size++;
    }
    return this.traversing();
  }

  insertBefore(data, next) {
    const node = new Node(data);
    let currentNode = this.head;
    while (currentNode && currentNode.data != next) {
      currentNode = currentNode.next;
    }
    if (currentNode != null) {
      if (currentNode == this.head) {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      } else {
        currentNode.prev.next = node;
        node.prev = currentNode.prev;
        node.next = currentNode;
        currentNode.prev = node;
      }
      this.size++;
    }
    return this.traversing();
  }

  delete(data) {
    let currentNode = this.head;
    while (currentNode && currentNode.data != data) {
      currentNode = currentNode.next;
    }
    if (currentNode != null) {
      if (currentNode.prev == null) {
        if (currentNode.next) {
          this.head = currentNode.next;
          currentNode.next.prev = null;
          currentNode.next = null;
        } else {
          this.head = null;
        }
        this.size--;
      } else {
        currentNode.prev.next = currentNode.next;
        if (currentNode.next) {
          currentNode.next.prev = currentNode.prev;
        }
        currentNode = null;
        this.size--;
      }
    }
    return this.traversing();
  }

  clone() {
    const doublyLinkedList = new DoublyLinkedList();
    let currentNode = this.head;
    while (currentNode) {
      doublyLinkedList.addLast(currentNode.data);
      currentNode = currentNode.next;
    }
    return doublyLinkedList;
  }
}

module.exports = DoublyLinkedList;