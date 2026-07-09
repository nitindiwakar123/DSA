function frequencySort(nums) {
    const hashmap = new Map();
    let ans = [];

    for (const num of nums) {
        hashmap.set(num, (hashmap.get(num) ?? 0) + 1)
    }

    let freq = 1;
    let currNum = 0;
    
    
    while (new Array([...hashmap.keys()]).length > 0) {
        for (const key of hashmap.keys()) {
            if(hashmap.get(key) == freq) 
                currNum = key;
        }

        let tempFreq = freq;
        while (tempFreq > 0) {
            ans.push(currNum); 
            tempFreq--;       
        }

        hashmap.delete(currNum);
        freq++;
    }

    console.log(ans);
    
}

// console.log(frequencySort([1,1,2,2,2,3]));
// pending...