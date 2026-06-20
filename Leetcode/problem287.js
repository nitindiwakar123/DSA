function findDuplicate(nums) {
    let temp = -1;
    for (const n of nums) {
        
        if(temp == n) {
        console.log(temp);

            return n;   
        }
        temp = n;
    }

    return -1;
}

console.log(findDuplicate([3,1,3,4,2]));
