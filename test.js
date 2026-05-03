function printPower(a, b) {
    let power = 1;
    while (b>0) {
        power *= a;
        b--;
    }

    console.log(power);
}

printPower(5, 3);
