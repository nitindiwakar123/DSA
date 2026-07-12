function add(num1, num2) {
    const n1 = num1.length;
    const n2 = num2.length;

    let first = n1 - 1;
    let second = n2 - 1;
    let ans = "";

    let carry = 0;
    while (second >= 0) {
        const res = (num1[first] - '0') + (num2[second] - '0') + carry;
        carry = Math.floor(res / 10);
        ans  = res % 10 + ans;
        
        first--;
        second--;
    }

    while (first >= 0) {
        const res = (num1[first] - '0') + carry;
        carry = Math.floor(res / 10);
        ans = res % 10 + ans;
        first--;
    }

    if(carry) {
        ans = '1' + ans;
    }

    return ans;
}

function addStrings(num1, num2) {
    if(num1.length < num2.length)
        return add(num2, num1);
    else
        return add(num1, num2);
}

// Test Cases
// console.log(addStrings("999", "999")); // "1998"

// console.log(addStrings("11", "123")); // "134"

// console.log(addStrings("456", "77")); // "533"

// console.log(addStrings("0", "0")); // "0"

// console.log(addStrings("1", "9")); // "10"

// console.log(addStrings("9", "9")); // "18"

// console.log(addStrings("99", "1")); // "100"

// console.log(addStrings("999", "1")); // "1000"

// console.log(addStrings("123", "456")); // "579"


// console.log(addStrings("500", "500")); // "1000"

// console.log(addStrings("1000", "2000")); // "3000"

// console.log(addStrings("99999", "1")); // "100000"

// console.log(addStrings("1", "99999")); // "100000"

// console.log(addStrings("123456789", "987654321")); // "1111111110"

// console.log(addStrings("111111111111111111", "888888888888888889")); // "1000000000000000000"

// console.log(addStrings("999999999999999999", "999999999999999999")); // "1999999999999999998"

// console.log(addStrings("100000000000000000000", "1")); // "100000000000000000001"

// console.log(addStrings("1", "100000000000000000000")); // "100000000000000000001"

// console.log(addStrings("10", "90")); // "100"

// console.log(addStrings("1010", "9090")); // "10100"

// console.log(addStrings("808", "202")); // "1010"

// console.log(addStrings("13579", "86421")); // "100000"

// console.log(addStrings("123456789123456789", "876543210876543211")); // "1000000000000000000"

// console.log(addStrings("999999999", "999999999")); // "1999999998"

// console.log(addStrings("100", "900")); // "1000"