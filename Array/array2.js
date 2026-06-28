// WAP to swap two index values of the array.
function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    console.log(arr);

}

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr;
}

function reverseArray2(arr, start, end) {
    let left = start;
    let right = end;

    while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr;
}

function reverseHalfs(arr) {
    let fast = 0;
    let slow = 0;

    while (fast < arr.length - 1) {
        fast += 2;
        slow += 1;
    }

    reverseArray2(arr, 0, slow);
    reverseArray2(arr, slow + 1, arr.length - 1);

    return arr;
}

// console.log(reverseHalfs([10, 20, 30, 40, 50, 60, 70]));

// WAP to zigzag merge two arrays into a single array.
function mergeTwoArrays(arr1, arr2) {
    let ans = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < arr1.length && j < arr2.length) {
        ans[k++] = arr1[i++];
        ans[k++] = arr2[j++];
    }

    while (i < arr1.length) {
        ans[k++] = arr1[i++];
    }

    while (j < arr2.length) {
        ans[k++] = arr2[j++];
    }

    return ans;
}

// console.log(mergeTwoArrays([20, 30, 50], [2, 4, 6, 8, 10]));

// Max consecutive 1 in any array
function findMaxConsecutiveOnes(nums) {
    let maxCount = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 1) {
            count = 0;
        } else {
            count++;
            maxCount = Math.max(maxCount, count);
        }
    }

    return maxCount;
}

// console.log(findMaxConsecutiveOnes([6, 1, 1, 1, 7, 7, 1, 1, 1, 1]));

// Max consecutive 1 in any array
function findMaxConsecutiveK(nums, k) {
    let maxCount = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != k) {
            count = 0;
        } else {
            count++;
            maxCount = Math.max(maxCount, count);
        }
    }

    return maxCount;
}

// console.log(findMaxConsecutiveK([6, 1, 1, 1, 7, 7, 7, 1, 1, 7], 7));

// WAP to find Second distinct biggest element of the array.
function findLargestAndSecondLargest(nums) {
    let largest = nums[0];
    let secondLargest = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i < nums.length; i++) {
        const current = nums[i];
        if (current > largest) {
            secondLargest = largest;
            largest = current;
        } else if (current < largest && current > secondLargest) {
            secondLargest = current;
        }
    }

    return [largest, secondLargest];
}

// console.log(findLargestAndSecondLargest([-1, -4, 0, 0,-255]));

// WAP to print Second Smallest element of the array.
function printSecondSmallest(nums) {
    let smallest = nums[0];
    let secondSmallest = nums[0];

    for (const n of nums) {
        if (n < smallest) {
            secondSmallest = smallest;
            smallest = n;
        } else if (n > smallest && n < secondSmallest) {
            secondSmallest = n;
        }
    }

    return secondSmallest;
}

// console.log(printSecondSmallest([80, 80, 43, 50, 38, 63, 58, 80]));
