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

// brute
// function deleteMiddle(head) {
//     if (head.next == null) {
//         head = null;
//         return head;
//     }

//     const nodeAddresses = [];
//     let temp = head;

//     while (temp) {
//         nodeAddresses.push(temp);
//         temp = temp.next;
//     }

//     let middleNode = nodeAddresses[Math.floor(nodeAddresses.length / 2)];
//     let prevNode = nodeAddresses[Math.floor(nodeAddresses.length / 2) - 1];

//     prevNode.next = middleNode.next;

//     return head;
// }

// better
// function deleteMiddle(head) {
//     if (head.next == null) {
//         head = null;
//         return head;
//     }
//     let temp = head;
//     let n = 0;
//     while (temp) {
//         temp = temp.next;
//         n++;
//     }

//     let prev = head;

//     for (let i = 1; i < Math.floor(n / 2); i++) { 
//         prev = prev.next;
//     }

//     prev.next = prev.next.next;

//     return head;
// }

// optimal
function deleteMiddle(head) {
    if(head.next == null) {
        head = null;
        return head;
    }
    let fast = head;
    let slow = head;
    let prev = head;

    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;   
    }

    prev.next = slow.next;

    return head;
}

const head = createSinglyLinkedList([10, 20, 6, 8, 70, 90]);
deleteMiddle(head)
