const arr = [1, 2, 5, 3, 5, 3, 9, 7, 1, 4];

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);
    this.root === null
      ? this.root = newNode
      : this._insertNode(this.root, newNode);
  }

  _insertNode(node, newNode) {
    if (newNode.data <= node.data) {
      node.left === null
        ? node.left = newNode
        : this._insertNode(node.left, newNode);
    } else {
      node.right === null
        ? node.right = newNode
        : this._insertNode(node.right, newNode);
    }
  }

  postOrder(node = this.root) {
    if (node === null) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.data);
  }

  preOrder(node = this.root) {
    if (node === null) return;
    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  inOrder(node = this.root) {
    if (node === null) return;
    this.inOrder(node.left);
    console.log(node.data);
    this.inOrder(node.right);
  }
}