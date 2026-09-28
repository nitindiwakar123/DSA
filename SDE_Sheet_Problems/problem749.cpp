// 749. Sum of Highest and Lowest Frequency
#include <iostream>
#include <vector>
#include <stdio.h>
using namespace std;

int sumHighestAndLowestFrequency(vector<int> &nums)
{
    int n = nums.size();

    vector<int> hash(10001, 0);
    for (int i = 0; i < n; i++)
    {
        hash[nums[i]]++;
    }

    int maxFreq = 0;
    int minFreq = n + 1;

    for (int i = 0; i < hash.size(); i++)
    {
        if (hash[i] > maxFreq)
        {
            maxFreq = hash[i];
        }
        if (hash[i] > 0 && hash[i] < minFreq)
        {
            minFreq = hash[i];
        }
    }

    cout<<maxFreq<<endl<<minFreq<<endl;
    return maxFreq + minFreq;
}

int main()
{
    vector<int> nums = {1, 2, 2, 3, 3, 3};
    int result = sumHighestAndLowestFrequency(nums);
    cout<<result<<endl;
    return 0;
}