function removeZeros(n) {
    let num = 0;
    while (n>0) {
        if((n%10)==0) {
            n = Math.floor(n/10);
        } else {
            continue;
        }
        console.log(n);
        
    }

}
removeZeros(1020030)