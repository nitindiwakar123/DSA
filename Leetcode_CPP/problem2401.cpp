#include <iostream>
#include <stdio.h>
#include <vector>
#include <algorithm>
using namespace std;

// brute
// time - O(n*n)
// space - O(1)
// int longestNiceSubarray(vector<int> &nums)
// {
//     int n = nums.size();
//     int maxLength = 0;

//     for (int i = 0; i < n; i++)
//     {
//         int sum = 0, res = 0, j = i;
//         while (j < n)
//         {
//             res = nums[j] & sum;
//             if (res != 0)
//                 break;
//             sum += nums[j];
//             j++;
//         }
//         maxLength = max(maxLength, j - i);
//     }

//     return maxLength;
// }

int longestNiceSubarray(vector<int> &nums)
{
    int n = nums.size();
    int maxLength = 1, left = 0;
    long maskBit = 0;

    for (int right = 0; right < n; right++)
    {
        while ((maskBit & nums[right]) != 0)
        {
            maskBit ^= nums[left];
            left++;
        }
        
        maskBit |= nums[right];
        maxLength = max(maxLength, right - left + 1);
    }

    return maxLength;
}

int main()
{
    vector<int> nums = {84139415,693324769,614626365,497710833,615598711,264,65552,50331652,1,1048576,16384,544,270532608,151813349,221976871,678178917,845710321,751376227,331656525,739558112,267703680};
    int res = longestNiceSubarray(nums);
    cout << res << endl;
    return 0;
}