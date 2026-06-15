// optimal O(n), s(1)
function reverseString(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }

    return s;
}

// Test Cases
// console.log(reverseString(["H","a","n","n","a","h"]));
console.log(reverseString(["h","e","l","l","o"]));
