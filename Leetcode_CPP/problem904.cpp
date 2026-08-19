#include <iostream>
#include <stdio.h>
#include <set>
#include <vector>
#include <algorithm>
#include <unordered_map>
using namespace std;

// brute
// int totalFruit(vector<int> &fruits)
// {
//     int n = fruits.size();
//     int maxLength = 0;

//     for (int i = 0; i < n; i++)
//     {
//         set<int> unique;
//         int j = i;
//         while (j < n)
//         {
//             unique.insert(fruits[j]);
//             if (unique.size() > 2)
//                 break;
//             j++;
//         }
//         maxLength = max(maxLength, j - i);
//     }

//     return maxLength;
// }

// time - O(n)
// space - O(3)
int totalFruit(vector<int> &fruits)
{
    int n = fruits.size();
    unordered_map<int, int> hashmap;
    int maxLength = 0;

    int left = 0;
    for (int right = 0; right < n; right++)
    {
        hashmap[fruits[right]]++;

        if (hashmap.size() > 2)
        {
            hashmap[fruits[left]]--;
            if (hashmap[fruits[left]] == 0)
                hashmap.erase(fruits[left]);
            left++;
        }

        maxLength = max(maxLength, right - left + 1);
    }

    return maxLength;
}


int main()
{
    vector<int> nums = {0, 1, 2, 2};
    int res = totalFruit(nums);
    cout << res << endl;
    return 0;
}