const arr = [1, 5, 6, 8, 9, 10, 13, 16];
// 1. Access all even index elements from array.
function printEvenIndexELements(arr) {
    for (let i = 0; i<arr.length; i++) {
        if(i%2 === 0) {
            console.log(arr[i]);
        }
    }
}

printEvenIndexELements(arr);