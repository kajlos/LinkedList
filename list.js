class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let node = new Node(value);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
  }
  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
  size() {
    if (this.head == null) return 0;
    let count = 1;
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
      count++;
    }
    return count;
  }
  getHead() {
    if (this.head == null) return null;
    return this.head.value;
  }
  getTail() {
    if (this.head == null) return null;
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    return current;
  }
  at(index) {
    let current = this.head;
    let i = 0;
    while (current != null) {
      if (i == index) {
        return current;
      }
      current = current.next;
      i++;
    }
    return current;
  }
  pop() {
    let current = this.head;
    while (current.next.next != null) {
      current = current.next;
    }
    current.next = null;
  }
  contains(value) {
    let current = this.head;
    while (current.next != null) {
      if (current.value == value) return true;
      current = current.next;
    }
    return false;
  }
  find(value) {
    if (this.head == null) return null;
    let current = this.head;
    let index = 0;
    while (current != null) {
      if (current.value == value) return index;
      else {
        index++;
        current = current.next;
      }
    }
    return null;
  }
  toString() {
    if (this.head == null) return null;
    let current = this.head.next;
    let string = `${this.head.value}`;
    while (current != null) {
      string = string.concat(' -> ', current.value);
      current = current.next;
    }
    string = string.concat(' -> ', 'null');
    return string;
  }
  insertAt(value, index) {
    let current = this.head;
    let next;
    let node = new Node(value);
    let i = 1;
    if (index == 0) {
      node.next = current;
      this.head = node;
      return;
    }
    while (current != null) {
      if (i == index) {
        next = current.next;
        current.next = node;
        node.next = next;
        return;
      }
      i++;
      current = current.next;
    }
  }
  removeAt(index) {
    if (index == 0) {
      let next = this.head.next;
      this.head = next;
      return;
    }
    let previous = this.at(index - 1);
    previous.next = previous.next.next;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
let list = new LinkedList();
list.append(5);
list.append(9);
list.append(2);
console.log(list.at(2));
console.log(list.toString());
list.removeAt(1);
console.log(list.toString());
