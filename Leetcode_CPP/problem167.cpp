#include <iostream>
#include <stdio.h>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

// brute (TLE)
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
//                 return {i+1, j+1};
//             }
//         }
//     }

//     return {-1, -1};
// }

// better
// time - O(n) + O(log n)
// space - O(n)
// vector<int> twoSum(vector<int>& nums, int target) {
//     unordered_map<int, int> hashmap;
//     for(int i = 0; i<nums.size(); i++) {
//         int need = target-nums[i];
//         if(hashmap.count(need)) {
//             auto it = hashmap.find(need);
//             return {it->second+1, i+1};
//         }
//         hashmap[nums[i]] = i;
//     }

//     return {-1, -1};
// }

// optimal
// time - O(n)
// space - O(1)
vector<int> twoSum(vector<int>& numbers, int target) {
    int start = 0;
    int end = numbers.size() - 1;

    while (start < end) {
        int sum = numbers[start] + numbers[end];

        if(sum == target) {
            return {start+1, end+1};
        } else if(sum < target) {
            start++;
        } else end--;
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