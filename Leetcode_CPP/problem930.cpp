#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

// time - O(n*n)
// space - O(1)
int numSubarraysWithSum(vector<int> &nums, int goal)
{
    int n = nums.size();
    int count = 0;

    for (int i = 0; i < n; i++)
    {
        int sum = 0;
        for (int j = i; j < n; j++)
        {
            sum += nums[j];
            if (sum > goal)
                break;

            if (sum == goal)
                count++;
        }
    }

    return count;
}

// optimal
// time - O(2*2n)
// space - O(1)
int countSubarrays(vector<int>&nums, int goal) {
    if(goal < 0) return 0;
    int n = nums.size();
    int sum = 0, left = 0, right = 0, count = 0;

    while (right < n)
    {
        sum += nums[right];

        while (sum > goal)
        {
            sum -= nums[left];
            left++;
        }

        count += right - left + 1;
        right++;
    }

    return count;
}

int numSubarraysWithSum(vector<int> &nums, int goal)
{
    return countSubarrays(nums, goal) - countSubarrays(nums, goal-1);
}


int main()
{

    return 0;
}