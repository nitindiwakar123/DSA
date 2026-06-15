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
function oneToNwithBackTracking(i, n){
    if(i<1)
        return;

    oneToNwithBackTracking(i-1, n);
    console.log(i);
    
}

let n = 5;
// oneToNwithBackTracking(n, n);

// print in terms of N to 1 (BackTracking)
function nToOne(i, n) {
    if (i > n)
        return;

    nToOne(i+1, n);
    console.log(i);
}
nToOne(1, 5);