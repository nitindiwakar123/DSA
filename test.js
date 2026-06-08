function includes(arr, element) {
    for (const n of arr) {
        if(n === element) 
            return true;
    }
    return false;
}

const arr = ['1', 2, 3, "dsnfks", null];

console.log(!includes(arr, null));
