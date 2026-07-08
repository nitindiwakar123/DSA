function maxScore(cardPoints, k) {
    const n = cardPoints.length;
    let leftsum = 0;
    let rightSum = 0;
    let maxSum = 0;

    for (let i = 0; i <= k - 1; i++) {
        leftsum += cardPoints[i];
        maxSum = leftsum;
    }

    let rightIndex = n - 1;
    for (let i = k - 1; i >= 0; i--) {
        leftsum = leftsum - cardPoints[i];
        rightSum += cardPoints[rightIndex];
        rightIndex--;

        maxSum = Math.max(maxSum, leftsum + rightSum);
    }

    return maxSum;
}

// TC - O(2*k)
// SC - O(1)

// Test Cases
console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
