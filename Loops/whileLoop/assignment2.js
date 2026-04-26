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

    while (i <= n) {
        sum += i ** 2;
        i += 2;
    }
    console.log(`Sum of even numbers is: ${sum}`);
}
// printSumOfAllEvenSquares(10);

// WAJP to print sum of cubes of all even numbers from 1 to 100.
function printSumOfAllEvenCubes(n) {
    let i = 2;
    let sum = 0;

    while (i <= n) {
        sum += i ** 3;
        i += 2;
    }
    console.log(`Sum of even numbers cubes is: ${sum}`);
}

// printSumOfAllEvenCubes(100);

// WAJP to print sum of squares of all odd numbers from 1 to 100.
function printSumOfAllOddSquares(n) {
    let i = 1;
    let sum = 0;
    while (i <= n) {
        sum += i ** 2;
        i += 2;
    }
    console.log(`Sum is ${sum}`);
}

// printSumOfAllOddSquares(10);

// WAJP to print sum of cubes of all odd numbers from 1 to 100.
function printSumOfAllOddCubes(n) {
    let i = 1;
    let sum = 0;
    while (i <= n) {
        sum += i ** 3;
        i += 2;
    }
    console.log(`Sum is ${sum}`);
}

// printSumOfAllOddCubes(10);

// WAJP to print the sum of below series:
// 𝟏 ∗ 𝟐 + 𝟐 ∗ 𝟑 + 𝟑 ∗ 𝟒 … … 𝒖𝒑𝒕𝒐 𝟏𝟎0

function printSum(n) {
    let i = 1;
    let sum = 0;

    while (i <= n) {
        sum += i*(i+1);
        console.log({sum, i});
        
        i++;
    }
    console.log(`Sum is: ${sum}`);
}

// printSum(10);

// WAJP to print the sum of below series:  

// Q-11
// function printSumOfSeries(n) {
//     let i = 1;
//     let sum = 0;

//     while (i <= n) {
//         sum += i*((i+1)**2);
//         i++;
//     }
//     console.log(`Sum is: ${sum}`);
// }

// Q-12
// function printSumOfSeries(n) {
//     let i = 1;
//     let sum = 0;

//     while (i <= n) {
//         sum += (i**2)*(i+1);
//         i++;
//     }
//     console.log(`Sum is: ${sum}`);
// }

// Q-13
// 1/1+1/2+1/3+1/4.....1/n
// function printSumOfSeries(n) {
//     let i = 1;
//     let sum = 0;

//     while (i <= n) {
//         sum += Math.floor(1/i);
//         i++;
//     }
//     console.log(`Sum is: ${sum}`);
// }

// Even
// function printSumOfSeries(n) {
//     let i = 2;
//     let sum = 0;

//     while (i <= n) {
//         sum += Math.floor(1/i);
//         i += 2;
//     }
//     console.log(`Sum is: ${sum}`);
// }

// Odd
// function printSumOfSeries(n) {
//     let i = 1;
//     let sum = 0;

//     while (i <= n) {
//         sum += Math.floor(1/i);
//         i += 2;
//     }
//     console.log(`Sum is: ${sum}`);
// }

// function printSumOfSeries(n) {
//     let i = 1;
//     let sum = 0;

//     while (i <= n) {
//         sum += Math.floor(1/(i**2));
//         i++;
//     }
//     console.log(`Sum is: ${sum}`);
// }

// function printSumOfSeries(n) {
//     let i = 1;
//     let sum = 0;

//     while (i <= n) {
//         sum += Math.floor(1/(i**3));
//         i++;
//     }
//     console.log(`Sum is: ${sum}`);
// }

// function printSumOfSeries(n) {
//     let i = 1;
//     let sum = 0;

//     while (i <= n) {
//         sum += Math.floor(1/(i*i+1));
//         i++;
//     }
//     console.log(`Sum is: ${sum}`);
// }

// printSumOfSeries(10);

// WAJP to accept a input from user and print factorial of that number.
// function printFactorial(n) {
//     let factorial = n;
//     n = n - 1;
//     while (n>1) {
//         factorial *= n;
//         n--;
//     }

//     console.log("Factorial is: ", BigInt(factorial)); 
// }

// printFactorial(0);

// function getFactorial(n) {
//     return n>1? n * getFactorial(n-1): 1;
// }

// const getFactorial = n => n>1? n * getFactorial(n-1): 1;
// console.log(getFactorial(11));

// WAJP to accept two numbers from user and print power of a to b.
// function printPower(a, b) {
//     let power = 1;
//     while (b>0) {
//         power *= a;
//         b--;
//     }

//     console.log(power);
// }

// function printPower(a, b) {
//     console.log(a**b);
// }

// function printPower(a, b) {
//     console.log(Math.pow(a, b));
// }

// printPower(6, 3);