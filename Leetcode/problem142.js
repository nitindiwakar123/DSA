function detectCycle(head) {
    let fast = head;
    let slow = head;
    let prev = head;

    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;

        if(fast === slow) {
            while (prev != slow) {
                prev = prev.next;
                slow = slow.next;
            }

            return prev;
        }
    }

    return null;
}