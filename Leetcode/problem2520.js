function countDigits(num) {
    let count = 0;
    let n = num;
    while (num>0) {
        if(n%(num%10)==0) count++;
        num = Math.floor(num/10);
    }
    return count;
}

// Test Cases
// console.log(countDigits(0));
// console.log(countDigits(1));
// console.log(countDigits(11));

// Numbers with 0
// console.log(countDigits(1000));
// console.log(countDigits(10));
// console.log(countDigits(5000));

// Numbers with repeating digits
// console.log(countDigits(7777));
// console.log(countDigits(5555));
// console.log(countDigits(1111));
// console.log(countDigits(9999));

// Pattern in numbers with repeating digits. count = number of digits

// console.log(countDigits(684));

// Mixed Digits
// console.log(countDigits(124));  // 3
// console.log(countDigits(135));  // 3
// console.log(countDigits(2221)); // 1
// console.log(countDigits(1012)); 
// console.log(countDigits(0));   
// console.log(countDigits(101));   
// console.log(countDigits(1002));  
// console.log(countDigits(10)); 