// function is2sPower(n) {
//     return n>0 && (n&n-1) == 0;
// }

function is2sPower(n) {
    if(n<=0) return false;
    while (n>1) {
        if((n%2) != 0) return false;
        n = n/2;
    }
    return true;
}

console.log(is2sPower(512));
console.log(is2sPower(32));
console.log(is2sPower(16));
console.log(is2sPower(14));
console.log(is2sPower(18));
