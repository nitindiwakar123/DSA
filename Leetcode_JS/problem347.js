function topKFrequent(nums, k) {
    const hashMap = new Map();
   
    for (const num of nums) {
        const val = (hashMap.get(num) ?? 0) + 1;
        hashMap.set(num, val);
    }

    console.log(hashMap);
    
    // let most 
    // for (const key of hashMap.keys()) {
        
    // }
}

// console.log(topKFrequent([6, 1,2,1,2,1,2,3,1,3,2], 2));
// pending...