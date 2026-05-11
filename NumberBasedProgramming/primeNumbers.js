// Worst performance
// function isPrime(n) {
//     if(n==0 || n==1) return false;
//     for (let i = 2; i < n; i++) {
//         if(n%i == 0) return false;
//     }
//     return true;
// }

// Better than first one total iteration = n/2
// function isPrime(n) {
//     if(n==0 || n==1) return false;
//     for (let i = 2; i <= n/2; i++) {
//         if(n%i == 0) return false;
//     }
//     return true;
// }

// Most Optimized
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// console.log(isPrime(43));

function getCount(params) {
    
}

function printAndCountAllPrimesInRange(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
            count++
        }
    }
    console.log(`Count: ${count}`);
}

// printAndCountAllPrimesInRange(1, 100);
// printAndCountAllPrimesInRange(100, 200);
// printAndCountAllPrimesInRange(1, 10);

function getKthPrime(k) {
    if(k<1) return -1; 
    let count = 0;
    let i = 0;
    while (true) {
        if(isPrime(i)) {
            count++;
            if(count == k)
                return i;
        }
        i++
    }
}

// console.log(getKthPrime(0));
// console.log(getKthPrime(2));
// console.log(getKthPrime(3));
// console.log(getKthPrime(4));
// console.log(getKthPrime(5));
