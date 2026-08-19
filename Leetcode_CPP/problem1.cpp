#include <iostream>
#include <stdio.h>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

// brute
// time - O(n^2)
// space - O(1)
// vector<int> twoSum(vector<int>& nums, int target) {
//     int n = nums.size();
//     for (int i = 0; i < n; i++)
//     {
//         for (int j = i + 1; j < n; j++)
//         {
//             if (nums[i] + nums[j] == target)
//             {
//                 return {i, j};
//             }
//         }
//     }

//     return {-1, -1};
// }

// better
// time - O(n) + O(log n)
// space - O(n)

vector<int> twoSum(vector<int>& nums, int target) {
    int n = nums.size();
    unordered_map<int, int> hashmap;

    for (int i = 0; i < n; i++)
    {
        int comp = target - nums[i];
        if(hashmap[comp]) {
            return {i, hashmap[comp]-1};
        }

        hashmap[nums[i]] = i+1;
    }
    
    return {-1, -1};
}

int main() {
    vector<int> arr = {2,7,11,15};

    vector<int> res = twoSum(arr, 9);
    for (auto &&it : res) {
        cout<<it<<endl;
    }
    
    return 0;
}