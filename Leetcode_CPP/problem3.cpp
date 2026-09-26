#include <iostream>
#include <stdio.h>
#include <vector>
#include <set>
#include <unordered_map>
using namespace std;

// int lengthOfLongestSubstring(string s)
// {
//     int n = s.size();
//     int maxL = 0;

//     for (int i = 0; i < n; i++)
//     {
//         set<char> seen;
//         int j = i;
//         while (j < n)
//         {
//             if (seen.count(s[j]))
//                 break;
//             seen.insert(s[j]);
//             j++;
//         }

//         maxL = max(maxL, j-i+1);
//     }

//     return maxL;
// }

// int lengthOfLongestSubstring(string s)
// {
//     int n = s.size();
//     vector<int> hash(128, -1);
//     int maxL = 0;
//     int l = 0;
//     int r = 0;

//     while (r < n)
//     {
//         int index = int(s[r]);

//         if (hash[index] >= l && hash[index] != -1)
//         {
//             l = hash[index] + 1;
//         }

//         hash[index] = r;
//         maxL = max(maxL, r - l + 1);

//         r++;
//     }

//     return maxL;
// }


int lengthOfLongestSubstring(string s)
{
    int n = s.size();
    vector<int> hashmap(180, -1);
    int l = 0, r = 0;
    int maxLength = 0;

    while (r < n)
    {
        if (hashmap[s[r]] != -1)
        {
            l = r + 1;
        }

        hashmap[s[r]] = r;

        maxLength = max(maxLength, r - l + 1);

        r++;
    }

    return maxLength;
}

int main()
{
    int result = lengthOfLongestSubstring("abcabcbb");
    cout<<result<<endl;
    return 0;
}