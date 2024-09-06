// class Queue {
//     constructor(...args) {
//         return [...args];
//     }

//     enqueue(value) {
//         this.push(value);
//     }

//     dequeue() {
//         return this[0] ? this[0] : null;
//     }
// }

// const queue = new Queue(1, 2, 3, 4, 5);
// console.log(queue);
// queue.enqueue(7);
// console.log(queue.dequeue());

class Collection {
    constructor(...args) {
        return [...args];
    }
    clear() {
        this.length = 0;
    }
    print() {
        console.log(this);
    }
    isEmpty() {
        return this.length >= 1 ? false : true;
    }
    length() {
        return this.length;
    }
}

// class Stack extends Collection{
//     constructor(...args) {
//         return [...args];
//     }
//     push(value) {
//         this.push(value);
//     }    
//     pop() {
//         return this[this.length - 1];
//     }
// }

// const stack = new Stack(1, 2, 3, 4, 5);
// console.log(stack);
// stack.push(6);
// console.log(stack.pop());

class Queue extends Collection{
    constructor(...args) {
        return [...args];
    }
    enqueue(value) {
        this.push(value);
    }

    dequeue() {
        return this[0] ? this[0] : null;
    }
}

const queue = new Queue(1, 2, 3, 4, 5, 7, 4);
queue.print();
console.log(queue.length());
queue.clear();
console.log(queue.length());
if(queue.isEmpty()) console.log("succeed");


/**
 * class Collection {
  constructor() {
    if (new.target === Collection) {
      throw new TypeError("Cannot construct Collection instances directly");
    }
    this.elements = [];
  }

  clear() {
    this.elements = [];
  }

  print() {
    console.log(this.elements.join(", "));
  }

  remove() {
    this.poll(); // 가장 먼저 들어온 요소를 제거 (Stack의 경우 가장 나중에 들어온 요소를 제거)
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  peek() {
    return this.elements[0]; // Queue의 경우 가장 먼저 들어온 요소를 반환, Stack에서는 오버라이드 필요
  }

  poll() {
    return this.elements.shift(); // Queue의 경우 가장 먼저 들어온 요소를 반환 및 제거, Stack에서는 오버라이드 필요
  }

  length() {
    return this.elements.length;
  }

  toArray() {
    return [...this.elements];
  }
}

 */