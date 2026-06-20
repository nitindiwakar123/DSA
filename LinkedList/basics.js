class Node {
    constructor(new_data) {
        this.val = new_data;
        this.next = null;
    }
}

function createSinglyLinkedList(values = []) {
    const head = new Node(values[0]);
    let temp = head;

    for (let i = 1; i < values.length; i++) {
        const n = new Node(values[i]);
        temp.next = n;
        temp = temp.next;
    }

    return head;
}

// access elements in backward direction with recursion
function printElement(head) {
    if (head == null)
        return;

    printElement(head.next);
    console.log(head.val);
}

// printElement(createSinglyLinkedList([10, 20, 30, 40]));

// function getNthFromStart(head, n) {
//     let temp = head;
//     let i = 1;
//     while (temp != null && i < n) {
//         temp = temp.next;
//         i++;
//     }

//     return (temp == null) ? -1 : temp.val;
// }

// function getNthFromStart(head, n) {
//     let temp = head;
//     let count = 1;

//     while (temp != null) {
//         temp = temp.next;
//         count++;
//         if (count == n) {
//             return temp.val;
//         }
//     }

//     return (temp == null) ? -1 : temp.val;
// }

const head = createSinglyLinkedList([10, 20, 30, 40, 50]);
console.log(getNthFromStart(head, 3));
