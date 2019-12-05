class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next)
        current = current.next;
      this.addHelper(current, node);
    }
    this.size++;
  }

  addHelper(prev, next) {
    prev.next = next;
  }

  addAll(elements) {
    for (let element of elements) {
      this.add(element);
    }
  }

  print({ delimiter = '->', print = true } = {}) {
    const result = this.printHelper(this.head, delimiter);
    return print ? console.log(result) : result;
  }

  printHelper(head, delimiter) {
    if (!head) return '';
    return (head === this.head ? '' : delimiter) + head.element + this.printHelper(head.next, delimiter);
  }

  insertAt(index, element) {
    let node = new Node(element);
    let current = this.head;
    let currentIndex = 0;
    if (index === 0) {
      node.next = current;
      this.head = node;
    } else {
      while(current.next && currentIndex < index - 1) {
        current = current.next;
        currentIndex++;
      }
      node.next = current.next;
      current.next = node;
    }
    this.size++;
  }

  removeAt(index) {
    let current = this.head;
    let currentIndex = 0;
    if (index > this.size - 1) {
      return -1;
    }
    if (index === 0) {
      this.head = current.next;
    } else {
      while (currentIndex < index - 1) {
        current = current.next;
        currentIndex++;
      }
      let temp = current;
      current.next = temp.next.next;
    }
    this.size--;
  }

  removeElement(element) {
    let current = this.head;
    let currentNext = current;

    if (current === null) return -1;
    if (current === this.head) {
      if (currentNext.element === element) {
        this.head = currentNext.next;
        return currentNext.element;
      }
      currentNext = current.next;
    }
    while (currentNext) {
      if (currentNext.element === element) {
        current.next = currentNext.next;
        return currentNext.element;
      }
      current = current.next;
      currentNext = current.next;
    }
    return -1;
  }

  _findFirst(element) {

  }
}

let lin = new LinkedList();
lin.add(12);
lin.addAll([10, 11, 12, 13, 14]);
lin.print();
lin.insertAt(6, 99);
lin.print();
lin.removeAt(3);
lin.print();
console.log(lin.removeElement(12));
lin.print();