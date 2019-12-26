/*
  A BST is a binary tree where nodes are ordered in the following way:
    1. Each node contains one key (also known as data)
    2. The keys in the left subtree are less then the key in its parent node, in short L < P
    3. The keys in the right subtree are greater the key in its parent node, in short P < R
    4. Duplicate keys are not allowed

  Depth: Is the number of edges from the tree's root node to the node.
    A root node will have a depth of 0
  Height: Is the number of edges on the longest path from the node to a leaf
    A leaf node will have a height of 0
*/

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
    if (newNode.data == node.data) return;
    if (newNode.data < node.data) {
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

  countNode(node = this.root) {
    if (this.root == null) return 0; // Immediate return. Close condition
    let count = 1;
    if (node.left != null) count += this.countNode(node.left);
    if (node.right != null) count += this.countNode(node.right);
    return count;
  }

  countLeafNode(node = this.root) {
    if (this.root == null) return 0;
    let count = 0;
    if (node.left == null && node.right == null) count = 1;
    if (node.left != null) count += this.countLeafNode(node.left);
    if (node.right != null) count += this.countLeafNode(node.right);
    return count;
  }

  depthOfNode(data) {
    let curNode = this.root;
    let depth = 0;
    while (curNode != null) {
      if (curNode.data == data) return depth;
      data < curNode.data
        ? curNode = curNode.left
        : curNode = curNode.right;
      depth++;
    }
    return -1;
  }

  numberOfEdges() {
    return this.numberOfNode() - 1;
  }
}