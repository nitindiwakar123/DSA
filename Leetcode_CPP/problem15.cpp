#include <iostream>
#include <stdio.h>
#include <vector>
#include <algorithm>
using namespace std;

// vector<vector<int>> threeSum(vector<int> &nums)
// {
//     int n = nums.size();
//     sort(nums.begin(), nums.end());
//     vector<vector<int>> ans;

//     for (int i = 0; i < n - 2; i++)
//     {
//         if (i>0 && nums[i] == nums[i - 1])
//             continue;
//         for (int j = i + 1; j < n - 1; j++)
//         {
//             if (j > i+1 && nums[j] == nums[j - 1])
//                 continue;

//             for (int k = j + 1; k < n; k++)
//             {
//                 if (k > j+1 && nums[k] == nums[k - 1])
//                     continue;

//                 if (nums[i] + nums[j] + nums[k] == 0)
//                 {
//                     ans.push_back({nums[i], nums[j], nums[k]});
//                 }
//             }
//         }
//     }

//     return ans;
// }

vector<vector<int>> threeSum(vector<int> &nums)
{
    int n = nums.size();
    sort(nums.begin(), nums.end());
    vector<vector<int>> ans;

    for (int i = 0; i < n-2; i++)
    {
        if (i > 0 && nums[i] == nums[i - 1])
            continue;
        int start = i + 1;
        int end = n - 1;

        while (start < end)
        {
            int sum = nums[i] + nums[start] + nums[end];

            if (sum < 0)
                start++;
            else if (sum > 0)
                end--;
            else
            {
                ans.push_back({nums[i], nums[start], nums[end]});
                start++;
                end--;
            }
            while (start < end && start > i + 1 && nums[start] == nums[start - 1])
                start++;
            while (start < end && end < n - 1 && nums[end] == nums[end + 1])
                end--;
        }
    }

    return ans;
}

int main()
{
    vector<int> nums = {0, 0, 0};
    vector<vector<int>> res = threeSum(nums);
    for (const auto &row : res)
    {
        // Inner loop iterates through each integer in the row
        for (int val : row)
        {
            cout << val << " ";
        }
        cout << "\n";
    }
}