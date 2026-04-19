function bulbSwitcher(n) {
    if(n<0) return -1;
    let i = 1;
    while (i*i <= n) {
        i++;
    }

    return i-1;
}

// Test Cases
// console.log(bulbSwitcher(0));
// console.log(bulbSwitcher(1));
// console.log(bulbSwitcher(2));
// console.log(bulbSwitcher(3));
// console.log(bulbSwitcher(4));
// console.log(bulbSwitcher(5));
// console.log(bulbSwitcher(6));
// console.log(bulbSwitcher(7));
// console.log(bulbSwitcher(9));
// console.log(bulbSwitcher(10));
// console.log(bulbSwitcher(15));
// console.log(bulbSwitcher(16));
// console.log(bulbSwitcher(17));
// console.log(bulbSwitcher(100));
// console.log(bulbSwitcher(1000));
// console.log(bulbSwitcher(1000000000));
// console.log(bulbSwitcher(24));
// console.log(bulbSwitcher(25));
// console.log(bulbSwitcher(8));