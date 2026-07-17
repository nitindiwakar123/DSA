#include <iostream>
#include <stdio.h>
#include <vector>
#include <map>
#include <algorithm>
using namespace std;

int longestConsecutive(vector<int> &nums)
{
    int n = nums.size();
    map<int, int> hashmap;
    int maxLength = 0;

    for (int i = 0; i < n; i++)
    {
        hashmap[nums[i]] = 1;
    }

    int count = 0;
    for (int i = 0; i < hashmap.size(); i++)
    {
        cout<<hashmap[i]<<endl;
    }
    

    return count;
}

// int longestConsecutive(vector<int> &nums)
// {
//     int n = nums.size();
//     int maxLength = 0;
//     sort(nums.begin(), nums.end());

//     int count = 0;
//     for (int i = 0; i < n; i++)
//     {
//         if(nums[i+1] != nums[i]+1) {
//             count = 0;
//         } else {
//             count++;
//         }
//         maxLength = max(maxLength, count);
//     }

//     return maxLength;
// }

int main()
{
    vector<int> nums = {0,3,7,2,5,8,4,6,0,1};
    int res = longestConsecutive(nums);
    return 0;
}