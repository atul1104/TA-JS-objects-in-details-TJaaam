//Stack
class stack {
  constructor() {
    this.stack = [];
  }
  push(ele) {
    this.stack.push(ele);
    return this.stack;
  }
  pop() {
    this.stack.pop();
    return this.stack;
  }
  peek(index = this.stack.length - 1) {
    return this.stack[index];
  }
  reverse() {
    return this.stack.reverse();
  }
  isEmpty() {
    return !(this.stack.length > 0);
  }
  displayStack() {
    return this.stack.join(" ");
  }
  get length() {
    return this.stack.length;
  }
}

//Queue

class Queue {
  constructor() {
    this.Queue = [];
  }
  enqueue(ele) {
    this.Queue.push(ele);
    return this.Queue;
  }
  dequeue() {
    this.Queue.splice(0, 1);
    return this.Queue;
  }
  peek(index = 0) {
    return this.Queue[index];
  }
  isEmpty() {
    return !(this.Queue.length > 0);
  }
  displayStack() {
    return this.Queue.join(" ");
  }
  get length() {
    return this.Queue.length;
  }
}
