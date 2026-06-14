class Node {
    constructor(new_data) {
        this.val = new_data;
        this.next = null;
    }
}


// n1 = new Node(20);
// n2 = new Node(30);
// n3 = new Node(40);

// head.next = n1;
// n1.next = n2;
// n2.next = n3;
// n3.next = null;

let temp = createSinglyLinkedList([1, 2, 3, 4, 5]);

while (temp.next != null) {
    console.log(temp.val);
    temp = temp.next;
}

console.log(temp);

// create function
function createSinglyLinkedList(values = []) {
    const head = new Node(values[0]);
    let temp = head;

    for (let i = 1; i<values.length; i++) {
        const n = new Node(values[i]);
        temp.next = n;
        temp = temp.next;
    }

    return head;
}