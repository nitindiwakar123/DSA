#include <iostream>
#include <stdio.h>
#include <vector>
#include <algorithm>
using namespace std;

// brute
// time - O(n*n)
// space - O(1)
int longestOnes(vector<int> &nums, int k)
{
    int n = nums.size();
    int maxOnes = 0;

    for (int i = 0; i < n; i++)
    {
        int zeroes = 0;
        int j = i;
        while (j < n)
        {
            if (nums[j] == 0)
                zeroes++;
            if (nums[j] == 0 && zeroes > k)
                break;
            j++;
        }
        maxOnes = max(maxOnes, j - i);
    }

    return maxOnes;
}

// time - O(n+k)
// space - O(1)
int longestOnes(vector<int> &nums, int k)
{
    int n = nums.size();
    int maxOnes = 0, zeroes = 0, left = 0;
    for (int right = 0; right < n; right++)
    {
        if(nums[right] == 0) zeroes++;

        while (zeroes > k)
        {
            if(nums[left] == 0) zeroes--;
            left++;
        }

        maxOnes = max(maxOnes, right - left + 1);
        
    }

    return maxOnes;
}

// time - O(n)
// space - O(1)
int longestOnes(vector<int> &nums, int k)
{
    int n = nums.size();
    int maxOnes = 0, zeroes = 0, left = 0;
    for (int right = 0; right < n; right++)
    {
        if(nums[right] == 0) zeroes++;

        while (zeroes > k)
        {
            if(nums[left] == 0) zeroes--;
            left++;
        }

        maxOnes = max(maxOnes, right - left + 1);
        
    }

    return maxOnes;
}

int main()
{
    return 0;
}