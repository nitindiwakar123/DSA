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
    unordered_map<int, int> hashmap;
    for(int i = 0; i<nums.size(); i++) {
        int need = target-nums[i];
        if(hashmap.count(need)) {
            auto it = hashmap.find(need);
            return {it->second, i};
        }
        hashmap[nums[i]] = i;
    }

    return {-1, -1};
}

int main() {
    vector<int> arr = {3,2,4};

    vector<int> res = twoSum(arr, 6);
    for (auto &&it : res) {
        cout<<it<<endl;
    }
    
    return 0;
}