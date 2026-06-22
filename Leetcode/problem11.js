// 11. Container With Most Water

// brute - this will not run on leetcode
// function maxArea(height) {
//     let max = 0;
//     let shortLine = 0;

//     for (let i = 0; i < height.length; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             const width = j - i;
//             const minHeight = Math.min(height[i], height[j]);
//             const res = width * minHeight
//             if(max < res) {
//                 max = res;
//             } else {
//                 shortLine = minHeight;

//             }
//         }
//     }

//     return max;
// }

// optimal - two pointers(opposite end)
function maxArea(height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1;

    while (i < j) {
        res = Math.min(height[i], height[j]) * (j - i);

        if (max < res)
            max = res;

        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return max;
}

// time complexity - O(n)
// space complexity - O(1)

// Test Cases
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([1, 1]));
// console.log(maxArea([1,2,3,4,5]));
// console.log(maxArea([5,4,3,2,1]));
// console.log(maxArea([4,4,4,4]));
// console.log(maxArea([1,100,1]));
// console.log(maxArea([10,1,1,1,10]));
// console.log(maxArea([0,2,0,4,0]));
// console.log(maxArea([0,0,0,0]));
// console.log(maxArea([2,3,10,5,7,8,9]));
// console.log(maxArea([6,1,1,1,1,6]));
