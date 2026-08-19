#include <iostream>
#include <stdio.h>
#include <vector>
#include <algorithm>
using namespace std;

// int minSubArrayLen(int target, vector<int> &nums)
// {
//     int n = nums.size();
//     int minLength = n + 1;

//     for (int i = 0; i < n; i++)
//     {
//         int sum = 0;
//         int j = i;
//         while (j < n)
//         {
//             sum += nums[j];
//             if (sum >= target) break;
//             j++;
//         }
//         if (sum >= target) {
//         minLength = min(minLength, j - i + 1);
//         }
//     }

//     return minLength == n + 1 ? 0 : minLength;
// }

int minSubArrayLen(int target, vector<int> &nums)
{
    int n = nums.size();
    int minLength = n + 1;
    int left = 0;
    int right = 0;
    int sum = 0;

    while (right < n)
    {
        sum += nums[right];

        while (sum >= target)
        {
            minLength = min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }

        right++;
    }

    return minLength == n+1? 0: minLength;
}



int main()
{
    vector<int> nums = {0, 0, 0};
    int res = minSubArrayLen(7, nums);
    cout << res << endl;
    return 0;
}