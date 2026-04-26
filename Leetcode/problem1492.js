function kthFactor(n, k) {
    let i = 1;
    let count = 0;

    while (i<=n) {
        if(n%i==0) {
            count++;

            if(count==k) return i;
        }
        i++;
    }

    return -1;
}

// Test Cases
// Edge cases
// console.log(kthFactor(1, 1)); // 1
// console.log(kthFactor(1, 2)); // -1

// Small numbers
// console.log(kthFactor(2, 1)); // 1
// console.log(kthFactor(2, 2)); // 2
// console.log(kthFactor(2, 3)); // -1

// console.log(kthFactor(3, 1)); // 1
// console.log(kthFactor(3, 2)); // 3
// console.log(kthFactor(3, 3)); // -1

// // Composite numbers
// console.log(kthFactor(4, 1)); // 1
// console.log(kthFactor(4, 2)); // 2
// console.log(kthFactor(4, 3)); // 4
// console.log(kthFactor(4, 4)); // -1

// console.log(kthFactor(6, 1)); // 1
// console.log(kthFactor(6, 2)); // 2
// console.log(kthFactor(6, 3)); // 3
// console.log(kthFactor(6, 4)); // 6
// console.log(kthFactor(6, 5)); // -1

// // Medium numbers
// console.log(kthFactor(10, 1)); // 1
// console.log(kthFactor(10, 2)); // 2
// console.log(kthFactor(10, 3)); // 5
// console.log(kthFactor(10, 4)); // 10
// console.log(kthFactor(10, 5)); // -1

// // Perfect squares
// console.log(kthFactor(16, 1)); // 1
// console.log(kthFactor(16, 2)); // 2
// console.log(kthFactor(16, 3)); // 4
// console.log(kthFactor(16, 4)); // 8
// console.log(kthFactor(16, 5)); // 16
// console.log(kthFactor(16, 6)); // -1

// // Prime numbers
// console.log(kthFactor(13, 1)); // 1
// console.log(kthFactor(13, 2)); // 13
// console.log(kthFactor(13, 3)); // -1

// // Larger numbers
// console.log(kthFactor(30, 1)); // 1
// console.log(kthFactor(30, 2)); // 2
// console.log(kthFactor(30, 3)); // 3
// console.log(kthFactor(30, 4)); // 5
// console.log(kthFactor(30, 5)); // 6
// console.log(kthFactor(30, 6)); // 10
// console.log(kthFactor(30, 7)); // 15
// console.log(kthFactor(30, 8)); // 30
// console.log(kthFactor(30, 9)); // -1

// // Random checks
// console.log(kthFactor(50, 3)); // 5
// console.log(kthFactor(100, 6)); // 20
// console.log(kthFactor(81, 5)); // 81