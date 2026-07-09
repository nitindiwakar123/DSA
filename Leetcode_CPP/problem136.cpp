#include <iostream>
#include <stdio.h>
#include <vector>
#include <unordered_map>
using namespace std;

// brute
// time - (n^2)
// space - (1)
// int singleNumber(vector<int>& nums) {
//     int n = nums.size();
//     for (int i = 0; i < n; i++) {
//         bool flag = false;
//         for (int j = 0; j < n; j++) {
//             if(i != j && nums[i] == nums[j]) {
//                 flag = true;
//                 break;
//             }
//         }
//         if(!flag) return nums[i];
//     }

//     return 0;
// }

// better
// time - (n+m)
// space - (m)
// m = map.size
// int singleNumber(vector<int>& nums) {
//     int n = nums.size();
//     unordered_map<int, int> hashmap;
    
//     for (int i = 0; i < n; i++) {
//         hashmap[nums[i]]++;
//     }
    
//     for (auto &&it : hashmap) {
//         if(it.second == 1) {
//             return it.first;
//         }
//     }
    
//     return 0;
// }

// optimal
// time - O(n)
// space - O(1)
int singleNumber(vector<int>& nums) {
    int n = nums.size();
    int ans = 0;
  
    for (int i = 0; i < n; i++) {
        ans ^= nums[i];
    }

    return ans;
}

int main() {
    vector<int> nums = {2, 2, 1};
    int res = singleNumber(nums);
    cout<<res<<endl;
    return 0;
}
