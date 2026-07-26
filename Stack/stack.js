class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size == 0;
    }

    peek() {
        if (this.size == 0) {
            throw new Error("Stack is Empty!");
        }
        return this.top.val;
    }

    push(val) {
        const newNode = new Node(val);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.size == 0) {
            throw new Error("Stack is Empty!");
        }
        const val = this.top.val;
        this.top = this.top.next;
        this.size--;

        return val;
    }

    toString() {
        if (this.size == 0) {
            throw new Error("Stack is Empty!");
        }
        let res = "[";
        let temp = this.top;
        while (temp != null) {
            res += `${temp.val},`;
            temp = temp.next;
        }

        return res.slice(0, res.length - 1) + "]";
    }

    search(val) {
        if (this.size == 0) {
            throw new Error("Stack is Empty!");
        }
        let temp = this.top;
        let pos = 0;
        while (temp != null) {
            if (temp.val == val) {
                return pos;
            }
            temp = temp.next;
            pos++;
        }

        return -1;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

// console.log(stack.isEmpty());
// console.log(stack.peek());

// console.log(stack.toString(), stack.getSize());
// console.log(stack.pop());
// console.log(stack.toString(), stack.getSize());
console.log(stack.search(20));
// console.log(stack.toString(), stack.search(20));
