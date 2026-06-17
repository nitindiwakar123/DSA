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
    if(n==1)
        return 1;

    return n * factorial(n-1);
}

// console.log(factorial(6));

