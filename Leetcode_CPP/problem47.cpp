#include <iostream>
#include <stdio.h>
#include <unordered_map>
#include <vector>
#include <algorithm>
#include <set>
using namespace std;

// brute
// void backtrack(vector<int> &nums, vector<int> &ds, unordered_map<int, int> &hashmap, vector<vector<int>> &ans, int n)
// {
//     if (ds.size() == n)
//     {
//         ans.push_back(ds);
//         return;
//     }

//     for (int i = 0; i < n; i++)
//     {
//         if (hashmap[nums[i]])
//             continue;

//         ds.push_back(nums[i]);
//         hashmap[nums[i]] = 1;
//         backtrack(nums, ds, hashmap, ans, n);
//         ds.pop_back();
//         hashmap.erase(nums[i]);
//     }
// }

// vector<vector<int>> permute(vector<int> &nums)
// {
//     int n = nums.size();
//     vector<int> ds = {};
//     unordered_map<int, int> hashmap;
//     vector<vector<int>> ans = {};
//     backtrack(nums, ds, hashmap, ans, n);
//     return ans;
// }

void backtrack(int idx, vector<int> &nums, vector<vector<int>> &ans, int n)
{
    if (idx == n - 1)
    {
        ans.push_back(nums);
        return;
    }

    set<int> seen;
    for (int j = idx; j < n; j++)
    {
        if(seen.count(nums[j])) continue;
        
        seen.insert(nums[j]);
        swap(nums[idx], nums[j]); // take
        backtrack(idx+1, nums,  ans, n); // explore
        swap(nums[idx], nums[j]); // discard
    }
}

vector<vector<int>> permute(vector<int> &nums)
{
    int n = nums.size();
    sort(nums.begin(), nums.end());
    vector<vector<int>> ans = {};
    backtrack(0, nums, ans, n);
    return ans;
}

int main()
{
    vector<int> nums = {1, 1, 2};
    vector<vector<int>> ans = permute(nums);
    for (const auto &row : ans)
    {
        // Inner loop iterates through each integer in that row
        for (int val : row)
        {
            std::cout << val << " ";
        }
        std::cout << "\n";
    }
    return 0;
}