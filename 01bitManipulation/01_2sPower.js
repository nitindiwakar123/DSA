function is2sPower(n) {
    return n>0 && (n&n-1) == 0;
}
 
console.log(is2sPower(512));