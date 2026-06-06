const arr = [1, 5, 6, 8, 9, 10, 19, 13, 16];
console.log(arr);

// 1. Access all even index elements from array.
function printEvenIndexELements(arr) {
    for (let i = 0; i<arr.length; i++) {
        if(i%2 === 0) {
            console.log(arr[i]);
        }
    }
}

// printEvenIndexELements(arr);

// 2. Access all even elements from array.
function printEvenELements(arr) {
    for (let i = 0; i<arr.length; i++) {
        if(arr[i]%2 === 0) {
            console.log(arr[i]);
        }
    }
}

// printEvenELements(arr);

// 3. count all even elements from array.
function countEvenELements(arr) {
    let count = 0;
    for (let i = 0; i<arr.length; i++) {
        if(arr[i]%2 === 0) {
            count++;
        }
    }
    console.log("Count:", count);
    
}

// countEvenELements(arr);

// 4. Access all elements of array from end.
function elementsFromEnd(arr) {
    for (let i = arr.length-1; i>=0; i--) {
        console.log(arr[i]);
    }
}
// elementsFromEnd(arr);

// 5. print and count all three-digit numbers from array
function printAndCountThreeDigitsNumbers(arr) {
    let count = 0;
    for (const num of arr) {
        if(num>99 && num<1000) {
            count++;
            console.log(num);
        }
    }
}

// printAndCountThreeDigitsNumbers([1, 2, 54, 344, 799, 999, 1000, 1999]);

// 6. Print sum of all elements from array.
function printSumOfElements(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }

    console.log(sum);
}

// printSumOfElements([10, 10, 9]);