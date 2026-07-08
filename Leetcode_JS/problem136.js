// Single Number

// function getSingleNumber(nums) {
//     let res = 0;
//     for (let i = 0; i<nums.length; i++) {
//         res = res ^ nums[i];
//     }
//     return res;
// }

function getSingleNumber(nums) {
    return nums.reduce((acc, ele) => acc^ele, 0);
}

// function getSingleNumber(nums) {
//     for (let i = 0; i<nums.length; i++) {
//         for (let j = i+1; j<nums.length; j++) {
//             const primaryEle = nums[i];
//             const secondryEle = nums[j];
//             console.log({i, j, primaryEle, secondryEle, "primaryEle == secondryEle": primaryEle == secondryEle, "j == nums.length-1 && primaryEle != secondryEle": j == nums.length-1 && primaryEle != secondryEle});
            
//             if(primaryEle == secondryEle) break;
//             if(j == nums.length-1 && primaryEle != secondryEle) return primaryEle;
//         }
//     }
// }
console.log(getSingleNumber([30, 10, 20, 30, 10, 20, 17]));

