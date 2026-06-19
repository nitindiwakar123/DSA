class Node {
    constructor(data_value) {
        this.val = data_value;
        this.next = null;
        this.prev = null;
    }
}

// const head = new Node(10);

// const n1 = new Node(20);
// const n2 = new Node(30);
// const n3 = new Node(40);
// const n4 = new Node(50);

// head.next = n1;
// n1.next = n2;
// n1.prev = head;

// n2.next = n3;
// n2.prev = n1;

// n3.next = n4;
// n3.prev = n2;

// n4.prev = n3;

function createLinkedList(list) {
    const head = new Node(list[0]);
    let temp = head;

    for (let i = 1; i < list.length; i++) {
        const newNode = new Node(list[i]);
        newNode.prev = temp;
        temp.next = newNode;
        temp = newNode;
    }

    return temp;
}

let temp = createLinkedList([1, 2, 3, 4]);

// while (temp != null) {
//     console.log(temp.val);
//     temp = temp.prev;
// }