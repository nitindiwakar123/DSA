// 350. Intersection of Two Arrays

// brute
function intersection(nums1, nums2) {
    const n1 = nums1.length;
    const n2 = nums2.length;
    const visited = new Array(n2).fill(0);
    const intersec = [];
    for (let i = 0; i < n1; i++) {
        for (let j = 0; j < n2; j++) {

            if(nums1[i] === nums2[j] && visited[j] === 0) {
                intersec.push(nums2[j]);
                visited[j] = 1;
                break;
            }
        }
    }

    return intersec;
}

// optimized
// function intersection(a, b) {
//     const intersec = [];
//     let i = 0;
//     let j = 0;

//     while (i < a.length && j < b.length) {
//         if (a[i] < b[j]) {
//             i++;
//         } else if (b[j] < a[i]) {
//             j++;
//         } else {
//             intersec.push(a[i]);
//             i++;
//             j++;
//         }
//     }

//     return intersec;
// }


// Test Cases
console.log(intersection([0, 2, 3, 3, 5, 6], [0, 1, 2, 2, 3, 3, 4, 5, 6, 7]));
console.log(intersection([1,2,2,1], [2,2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
