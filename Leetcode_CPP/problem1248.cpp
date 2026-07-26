#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

// brute(TLE)
// time - O(n*n)
// space - O(1)
// int numberOfSubarrays(vector<int> &nums, int k)
// {
//     int n = nums.size();
//     int count = 0;

//     for (int i = 0; i < n; i++)
//     {
//         int odd = 0;
//         for (int j = i; j < n; j++)
//         {
//             if ((nums[j] % 2) != 0)
//                 odd++;

//             if (odd > k)
//                 break;

//             if (odd == k)
//                 count++;
//         }
//     }
//     return count;
// }

// optimal
// time - O(2 * 2n)
// space - O(1)
int countSubarrays(vector<int> &nums, int k)
{
    if (k < 0)
        return 0;
    int n = nums.size();
    int odds = 0, count = 0, left = 0;

    for (int right = 0; right < n; right++)
    {
        if (nums[right] % 2 != 0)
            odds++;

        while (odds > k)
        {
            if (nums[left] % 2 != 0)
                odds--;
            left++;
        }

        count += right - left + 1;
    }

    return count;
}

int numberOfSubarrays(vector<int> &nums, int k)
{
    return countSubarrays(nums, k) - countSubarrays(nums, k - 1);
}

int main()
{
    vector<int> nums = {1, 1, 2, 1, 1};
    int res = numberOfSubarrays(nums, 3);
    cout << res << endl;
    return 0;
}