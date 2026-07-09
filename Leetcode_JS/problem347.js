// brute
function topKFrequent(nums, k) {
    const hashMap = new Map();
    const ans = [];
    let maxFreq = 0;
   
    for (const num of nums) {
        const val = (hashMap.get(num) ?? 0) + 1;
        hashMap.set(num, val);

        if(val > maxFreq) {
            maxFreq = val;
        }
    }

    while(maxFreq > 0 && k > 0) {
        for (const key of hashMap.keys()) {
            if(hashMap.get(key) == maxFreq) {
                ans.push(key);
                k--;
                if(k == 0) break;
            }
        }
        maxFreq--;        
    }

    return ans;
}

// Test Cases

// console.log(topKFrequent([1,2,3], 1)); 
// Any one of [1], [2], or [3] (all have frequency 1)

// console.log(topKFrequent([1,1,1,2,2,3], 2)); 
// // [1,2]

// console.log(topKFrequent([1], 1)); 
// // [1]

// console.log(topKFrequent([1,2], 2)); 
// // [1,2]

// console.log(topKFrequent([4,4,4,4], 1)); 
// // [4]

// console.log(topKFrequent([5,5,6,6,7], 2)); 
// // Any order: [5,6]

// console.log(topKFrequent([-1,-1,-2,-2,-2,3], 2)); 
// // [-2,-1]

// console.log(topKFrequent([0,0,0,1,1,2], 1)); 
// // [0]

// console.log(topKFrequent([10,20,20,30,30,30], 3)); 
// // [30,20,10]

// console.log(topKFrequent([9,9,8,8,7,7], 2)); 
// // Any two of [9,8], [9,7], [8,7] (all frequencies equal)

// console.log(topKFrequent([100], 1)); 
// // [100]

// console.log(topKFrequent([2,2,2,1,1,3], 2)); 
// // [2,1]

// console.log(topKFrequent([1,2,2,3,3,3,4,4,4,4], 3)); 
// // [4,3,2]

// console.log(topKFrequent([-5,-5,-5,-1,-1,0], 2)); 
// // [-5,-1]

// console.log(topKFrequent([1,1,2,2,3,3,4], 3)); 
// // Any three of [1,2,3] (all frequency 2)

// console.log(topKFrequent([7,6,5,4,3,2,1], 7)); 
// // [1,2,3,4,5,6,7] (any order)

// console.log(topKFrequent([1,1,1,2,2,2,3,3,4], 2)); 
// // Any order: [1,2]

// console.log(topKFrequent([8,8,8,8,9,9,10,10,10], 2)); 
// // [8,10]

// console.log(topKFrequent([1,2,3,4,5,5,4,4], 1)); 
// // [4]

// console.log(topKFrequent([1000,1000,999,999,999,998], 2)); 
// // [999,1000]