// function f() {
//     console.log(1);
//     f();
// }

// f(); // Infinite Recursion

function func(count) {
    if (count == 5) // Base condition
        return 5;

    console.log(count);
    count++;

    func(count);
}

let count = 0;
// func(count);

// print name N times
function printNameUntillN(i, n) {
    if (i > n)
        return;

    console.log("Nitin");
    printNameUntillN(i + 1, n);
}

// printNameUntillN(1, 5);  

// print numbers i to N
function oneToN(i, n) {
    if (i > n)
        return;

    console.log(i);
    oneToN(i + 1, n);
}

// oneToN(10, 10);

// print in terms of N to 1
// function nToOne(n) {
//     if (n < 1)
//         return;

//     console.log(n);
//     nToOne(n-1);
// }

// nToOne(10);

// print numbers i to N BackTracking
function oneToNwithBackTracking(i, n) {
    if (i < 1)
        return;

    oneToNwithBackTracking(i - 1, n);
    console.log(i);

}

// let n = 5;
// oneToNwithBackTracking(n, n);

// print in terms of N to 1 (BackTracking)
function nToOne(i, n) {
    if (i > n)
        return;

    nToOne(i + 1, n);
    console.log(i);
}
// nToOne(1, 5);

// Recursion parameterized approach
// function factorial(n, fact) {   

//     if (n < 1) {
//         console.log(fact);
//         return;
//     }

//     factorial(n - 1, fact * n);
// }

// factorial(5, 1);

// Recursion functional approach
function factorial(n) {
    if (n == 1)
        return 1;

    return n * factorial(n - 1);
}

// console.log(factorial(6));

// Recursion parameterized approach
// const nums = [1, 2, 7, 8, 56, 6];
const nums = [1, 2, 3, 4, 5, 6];
// const n = nums.length;
// function reverse(l, r) {
//     if (l >= r) {
//         console.log(nums);
//         return;
//     }
//     const temp = nums[l];
//     nums[l] = nums[r];
//     nums[r] = temp;

//     reverse(l + 1, r - 1);
// }

function reverse(i) {
    if (i >= n / 2) {

        console.log(nums);
        return;
    }
    const temp = nums[i];
    nums[i] = nums[n - i - 1];
    nums[n - i - 1] = temp;

    reverse(i + 1);
}

// reverse(0);

// is a string palindrome
let str = "nitin"
const n = str.length;
function isPalindrome(i) {
    if (i >= n / 2) {
        return true;
    } else if (str[i] != str[n - i - 1]) {
        return false;
    }

    return isPalindrome(i + 1);
}

// console.log(isPalindrome(0));

// Nth fibonacci number
function fib(n) {
    if (n <= 1)
        return n;

    return fib(n - 1) + fib(n - 2);
}

// console.log(fib(5));
