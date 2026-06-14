function deleteDuplicates(head) {
    let temp = head;
    while (temp != null && temp.next != null) {
        if (temp.val == temp.next.val) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    return head;
}


// for test cases generation
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

function iterateOverLinkedList(head) {
    let temp = head;
    while (temp != null) {
        console.log(temp.val);
        temp = temp.next;
    }

    console.log(temp);
}

// Test Cases
// let head = createSinglyLinkedList([10, 20, 20, 20, 40]);
// let resultHead = deleteDuplicates(head);
// iterateOverLinkedList(resultHead);

// let head = createSinglyLinkedList([1,1,2,3,3]);
// let resultHead = deleteDuplicates(head);
// iterateOverLinkedList(resultHead);

// let head = createSinglyLinkedList([1, 2, 2, 2, 4, 5]);
// let resultHead = deleteDuplicates(head);
// iterateOverLinkedList(resultHead);

// let head = createSinglyLinkedList([1, 1, 1]);
// let resultHead = deleteDuplicates(head);
// iterateOverLinkedList(resultHead);