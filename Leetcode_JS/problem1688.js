// function numberOfMatches(n) {
//     let totalMatches = 0;
//     while (n>1) {
//         totalMatches += Math.floor(n/2);
//         n = Math.floor((n/2)+(n%2));
//     }
//     return totalMatches;
// }

function numberOfMatches(n) {
    return n-1;
}

// Test Cases
console.log(numberOfMatches(1));
console.log(numberOfMatches(2));
console.log(numberOfMatches(3));
console.log(numberOfMatches(7));
console.log(numberOfMatches(8));
console.log(numberOfMatches(14));
