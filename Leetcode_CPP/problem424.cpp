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

// space - O(26)
int characterReplacement(string s, int k)
{
    int n = s.size();
    vector<int> hash(26, 0);
    int maxLength = 0, maxFreq = 0, left = 0, right = 0;

    while (right<n)
    {
        hash[s[right]-'A']++;
        maxFreq = max(maxFreq, hash[s[right]]);

        int changes = (right-left+1)+maxFreq;
        while (changes > k)
        {
            int tempMax = 0;
            hash[s[left]-'A']--;    
            tempMax = max(tempMax, hash[s[left]]);
            changes = (right-left+1)+tempMax;
            left++;
        }
        
        maxLength = max(maxLength, right-left+1);
        right++;
    }
    

    return maxLength;
}

int main()
{
    string s = "AABABBA";
    int res = characterReplacement(s, 1);
    cout<<res<<endl;
    return 0;
}