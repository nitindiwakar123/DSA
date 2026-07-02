// brute
function totalFruits(fruits) {
    const n = fruits.length;
    let maximumFruits = 0;

    for (let i = 0; i < n; i++) {
        let k = 2;
        let count = 0;
        let freq = new Array(n).fill(0);
        for (let j = i; j < n; j++) {
            if (freq[fruits[j]] == 0 && k == 0) break;

            if (freq[fruits[j]] == 0) k--;

            freq[fruits[j]]++;
            count++;
        }

        console.log(freq);

        maximumFruits = Math.max(maximumFruits, count);
    }

    return maximumFruits;
}

// optimal
function totalFruits(fruits) {
    const n = fruits.length;
    let maximumFruits = 0;
    const hash = new Array(n).fill(0);
    let l = 0;
    let r = 0;
    let k = 2;

    while (r < n) {
        if (hash[fruits[r]] == 0 && k == 0) {
            const temp = fruits[l];
            while (fruits[l] == temp || fruits[l+1] == temp) l++;
            k = 1;
            hash[temp] = 0;
        }

        if (hash[fruits[r]] == 0) k--;
        hash[fruits[r]] = 1;
        maximumFruits = Math.max(maximumFruits, r - l + 1);
        r++;
    }

    return maximumFruits;
}

// Test Cases
// console.log(totalFruits([0, 0, 1, 2 , 2]));
// console.log(totalFruits([1,2,3,2,2]));
// console.log(totalFruits([1, 2, 1, 2, 1, 2]));
// console.log(totalFruits([1, 2, 2, 2, 1]));
// console.log(totalFruits([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
// console.log(totalFruits([1, 0, 1, 4, 1, 4, 1, 2, 3]));
// console.log(totalFruits([7, 7, 8, 8, 7, 7, 8]));
// console.log(totalFruits([1, 2, 3, 1, 2, 3]));
// console.log(totalFruits([0,1,6,6,4,4,6]));
