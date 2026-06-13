class Node {
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
        this.prev = null;
    }
}

const head = new Node(10);

const n1 = new Node(20);
const n2 = new Node(30);

head.next = n1;

n1.next = n2;
n1.prev = head;

n2.prev = n1;

let temp = head;

while (temp.next != null) {
    temp = temp.next;
}

while (temp != null) {
    console.log(temp.data);
    temp = temp.prev;
}