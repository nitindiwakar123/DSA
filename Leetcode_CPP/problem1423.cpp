#include <iostream>
#include <stdio.h>
#include <vector>
#include <algorithm>
using namespace std;

// optimal
// time - O(k)
// space - S(1)
int maxScore(vector<int> &cardPoints, int k)
{
    int n = cardPoints.size();
    int maxPoints = 0, left = 0, right = n - 1, taken = 0;
    long sum = 0;

    while (right >= n - k)
    {
        while (taken < k)
        {
            sum += cardPoints[left];
            maxPoints = sum;
            taken++;
            if (taken < k)
                left++;
        }

        sum -= cardPoints[left];

        sum += cardPoints[right];
        if (maxPoints < sum)
            maxPoints = sum;

        taken++;
        left--;
        right--;
    }

    return maxPoints;
}

int maxScore(vector<int> &cardPoints, int k)
{
    int n = cardPoints.size();
    int maxPoints = 0, leftSum = 0, rightSum = 0;

    for (int i = 0; i < k; i++)
    {
        leftSum += cardPoints[i];
    }

    maxPoints = leftSum;

    int right = n - 1;
    for (int i = k - 1; i >= 0; i--)
    {
        rightSum += cardPoints[right];
        leftSum -= cardPoints[i];
        right--;
        maxPoints = max(maxPoints, leftSum + rightSum);
    }

    return maxPoints;
}

int main()
{
    return 0;
}