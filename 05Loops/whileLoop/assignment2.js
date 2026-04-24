// WAJP to print sum of all natural numbers from 1 to 100.
function printNumbers(n) {
    let i = 1;
    while (i <= n) {
        console.log(i);
        i++;
    }
}
// printNumbers(100);

// WAJP to print sum of all even numbers from 1 to 100.
function printSumOfEven(n) {
    let i = 1;
    let sum = 0;
    while (i <= n) {
        if ((i & 1) == 0) {
            console.log(i);
            sum += i;
        }

        i++;
    }
    console.log(`Sum of Even is: ${sum}`);
}
// printSumOfEven(10);

// WAJP to print sum of all Odd numbers from 1 to 100.
function printSumOfOdd(n) {
    let i = 1;
    let sum = 0;
    while (i <= n) {
        if ((i & 1) != 0) {
            console.log(i);
            sum += i;
        }

        i++;
    }
    console.log(`Sum of Odd is: ${sum}`);
}
// printSumOfOdd(10);

// WAJP to print sum of squares of all natural numbers from 1 to 100.
function printSquares(n) {
    let i = 1;
    let sum = 0;

    while (i <= n) {
        sum += i * i;
        i++;
    }
    console.log(`Sum of ${n} Numbers Squares is: ${sum}`);
}
// printSquares(10);

// WAJP to print sum of cubes of all natural numbers from 1 to 100.
function printCubes(n) {
    let i = 1;
    let sum = 0;

    while (i <= n) {
        sum += i ** 3;
        i++;
    }

    console.log(`Sum of ${n} Numbers Squares is: ${sum}`);
}
// printCubes(100);

// WAJP to print sum of squares of all even numbers from 1 to 100.
// function printSumOfAllEvenSquares(n) {
//     let i = 1;
//     let sum = 0;

//     while(i<=n) {
//         if((i&1) == 0) sum += i**2;
//         i++;
//     }
//     console.log(`Sum of even numbers is: ${sum}`);
// }

// way 2
function printSumOfAllEvenSquares(n) {
    let i = 2;
    let sum = 0;

    while(i<=n) {
        sum += i**2;
        i += 2;
    }
    console.log(`Sum of even numbers is: ${sum}`);
}
// printSumOfAllEvenSquares(10);

// WAJP to print sum of cubes of all even numbers from 1 to 100.
function printSumOfAllEvenCubes(n) {
    let i = 2;
    let sum = 0;

    while(i<=n) {
        sum += i**3;
        i += 2;
    }
    console.log(`Sum of even numbers cubes is: ${sum}`);
}

// printSumOfAllEvenCubes(100);