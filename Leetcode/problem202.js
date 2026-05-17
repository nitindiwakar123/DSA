function isHappy(n) {
    while (n > 9) {
        let sum = 0;

        while (n > 0) {
            sum += (n % 10) ** 2;
            n = Math.floor(n / 10);
        }

        n = sum;
    }

    return n == 1 || n == 7;
}

// console.log("========== SINGLE DIGIT NUMBERS ==========");

// console.log(isHappy(1)); // true
// console.log(isHappy(2)); // false
// console.log(isHappy(3)); // false
// console.log(isHappy(4)); // false
// console.log(isHappy(5)); // false
// console.log(isHappy(6)); // false
// console.log(isHappy(7)); // true
// console.log(isHappy(8)); // false
// console.log(isHappy(9)); // false

// console.log("\n========== POWERS OF TEN ==========");

// console.log(isHappy(10));
// console.log(isHappy(100));
// console.log(isHappy(1000));
// console.log(isHappy(10000));
// console.log(isHappy(1000000));

// console.log("\n========== NUMBERS WITH TRAILING ZEROES ==========");

// console.log(isHappy(20));
// console.log(isHappy(300));
// console.log(isHappy(4040));
// console.log(isHappy(4070));
// console.log(isHappy(6000));
// console.log(isHappy(800000));

// console.log("\n========== 7 * POWERS OF TEN ==========");

// console.log(isHappy(7));
// console.log(isHappy(70));
// console.log(isHappy(700));
// console.log(isHappy(7000));
// console.log(isHappy(70000));

// console.log("\n========== REPEATED DIGITS ==========");

// console.log(isHappy(11));
// console.log(isHappy(111));
// console.log(isHappy(1111));

// console.log(isHappy(22));
// console.log(isHappy(222));
// console.log(isHappy(2222));

// console.log(isHappy(33));
// console.log(isHappy(333));

// console.log(isHappy(44));
// console.log(isHappy(444));

// console.log(isHappy(77));
// console.log(isHappy(777));

// console.log(isHappy(666));

// console.log("\n========== LARGE NUMBERS THAT SHRINK FAST ==========");

// console.log(isHappy(1000001));
// console.log(isHappy(2000000));
// console.log(isHappy(3000000));
// console.log(isHappy(9000000));

// console.log("\n========== FAMOUS UNHAPPY CYCLE ==========");

// console.log(isHappy(4));
// console.log(isHappy(16));
// console.log(isHappy(37));
// console.log(isHappy(58));
// console.log(isHappy(89));
// console.log(isHappy(145));
// console.log(isHappy(42));
// console.log(isHappy(20));

// console.log("\n========== POWERS ==========");

// console.log(isHappy(2 ** 2));
// console.log(isHappy(2 ** 3));
// console.log(isHappy(2 ** 4));

// console.log(isHappy(3 ** 2));
// console.log(isHappy(3 ** 3));

// console.log(isHappy(5 ** 2));
// console.log(isHappy(5 ** 3));

// console.log("\n========== PALINDROME NUMBERS ==========");

// console.log(isHappy(121));
// console.log(isHappy(131));
// console.log(isHappy(202));
// console.log(isHappy(999));
// console.log(isHappy(1221));

// console.log("\n========== VERY LARGE NUMBERS ==========");

// console.log(isHappy(999999999));
// console.log(isHappy(123456789));
// console.log(isHappy(987654321));
// console.log(isHappy(111111111));

console.log("\n========== REVERSE NUMBER EXPERIMENTS ==========");

// console.log(isHappy(19));
// console.log(isHappy(91));

// console.log(isHappy(203));
// console.log(isHappy(302));

// console.log(isHappy(139));
// console.log(isHappy(931));

// console.log(isHappy(188));
// console.log(isHappy(881));

// Pattern: isHappy(n) === isHappy(rev(n))

// console.log("\n========== RANDOM TESTS ==========");

// console.log(isHappy(13));
// console.log(isHappy(19));
// console.log(isHappy(23));
// console.log(isHappy(28));
// console.log(isHappy(31));
// console.log(isHappy(32));
// console.log(isHappy(44));
// console.log(isHappy(68));
// console.log(isHappy(79));
// console.log(isHappy(82));
// console.log(isHappy(86));
// console.log(isHappy(91));
// console.log(isHappy(94));
// console.log(isHappy(97));