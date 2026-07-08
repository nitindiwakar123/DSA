// without hashing 
// print the frequency of each number in nums array
// function printFrequency(nums, k) {
//     for (const n of nums) {
//         let count = 0;
//         for (const element of nums) {
//             if(element == n) {
//                 count++;
//             }
//         }

//         console.log(`${n} appeared ${count} times`);

//     };

// }

// Time - O(n^2)
// Space - O(1)

// printFrequency([1, 1, 2, 3, 2, 2, 3]);

// with hashing 

function printFrequency(nums) {
    const hash = new Array(nums.length).fill(0);

    // precompute
    for (const n of nums) {
        hash[n]++;
    }

    // fetch
    for (let i = 0; i < hash.length; i++) {
        if (hash[i] != 0) {
            console.log(`${i} appeared ${hash[i]} times`);
        }
    }
}

// Time - O(n+n)
// Space - O(n)
// printFrequency([1, 1, 2, 3, 2, 2, 3]);


// hashing with strings

// problem
function countCharacter(char, str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char)
            count++;
    }

    console.log(count);

}

// Complexity Analysis
// Time - for one character - O(n)
// for Q number of characters - O(q*n)
// Space - O(1)

// countCharacter('j', "abcabcaabdz")

// solution with hashing
function countCharacterWithHashing(char, str) {
    console.log(str);
    
    let hash = new Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
        hash[str.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < hash.length; i++) {
        if (char.charCodeAt(0) == i+97) {
            console.log(`${char} appeared ${hash[i]} times!`);
        }
    }
}

// identify how much size of hash array you should create -
// if string only have lowercase letters - 26
// if string only have uppercase letters - 26
// if string may have any ascii character - 128/256
// always prefer array for string hashing

// countCharacterWithHashing('b', "abcakbcaabdz")

function hashingWithMap(arr, k) {
    const hashMap = new Map();

    for (const n of arr) {
        const val = (hashMap.get(n) ?? 0) + 1;
        hashMap.set(n, val)
    }

    for (const key of hashMap.keys()) {
        console.log(`${key} : ${hashMap.get(key)}`);
    }

    return hashMap.get(k) ?? 0;
}

console.log(hashingWithMap([12,8,1], 5));