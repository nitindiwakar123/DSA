#include <iostream>
#include <stdio.h>
#include <algorithm>
#include <vector>
#include <unordered_map>
using namespace std;

// brute(TLE)
// time - O(n*n)
// space - O(26)
// int characterReplacement(string s, int k)
// {
//     int n = s.size();
//     int maxLength = 0;

//     for (int i = 0; i < n; i++)
//     {
//         vector<int> hash(26, 0);
//         int maxFreq = 0;
//         for (int j = i  ; j < n; j++)
//         {
//             hash[s[j]-'A']++;
//             maxFreq = max(maxFreq, hash[s[j]-'A']);

//             int changes = (j-i+1) - maxFreq;
//             if(changes <= k) {
//                 maxLength = max(maxLength, j-i+1);
//             } else break;
//         }
//     }

//     return maxLength;
// }

// better
// time - O(n+n) * 26
// space - O(26)
// int characterReplacement(string s, int k)
// {
//     int n = s.size();
//     vector<int> hash(26, 0);
//     int maxLength = 0, maxFreq = 0, left = 0, right = 0;

//     while (right < n)
//     {
//         hash[s[right] - 'A']++;
//         maxFreq = max(maxFreq, hash[s[right] - 'A']);

//         while (((right - left + 1) - maxFreq) > k)
//         {
//             hash[s[left] - 'A']--;
//             left++;
//             maxFreq = 0;
//             for (int i = 0; i < hash.size(); i++)
//                 maxFreq = max(maxFreq, hash[i]);
//         }

//         maxLength = max(maxLength, right - left + 1);
//         right++;
//     }

//     return maxLength;
// }

// time - O(n)
// space - O(26)
int characterReplacement(string s, int k)
{
    int n = s.size();
    vector<int> hash(26, 0);
    int maxLength = 0, maxFreq = 0, left = 0, right = 0;

    while (right < n)
    {
        hash[s[right] - 'A']++;
        maxFreq = max(maxFreq, hash[s[right] - 'A']);

        if ((right - left + 1) - maxFreq > k)
        {
            hash[s[left] - 'A']--;
            left++;
        }

        maxLength = max(maxLength, right - left + 1);
        right++;
    }

    return maxLength;
}

int main()
{
    string s = "ABAB";
    int res = characterReplacement(s, 2);
    cout << res << endl;
    return 0;
}