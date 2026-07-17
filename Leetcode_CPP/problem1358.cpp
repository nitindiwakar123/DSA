#include <iostream>
#include <stdio.h>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

// brute (TLE)
// time - O(n*n)
// space - O(1)
int numberOfSubstrings(string s)
{
    int n = s.size();
    int count = 0;

    for (int i = 0; i < n; i++)
    {
        vector<int> hash(3, 0);
        for (int j = i; j < n; j++)
        {
            hash[s[j] - 'a'] = 1;
            if (hash[0] + hash[1] + hash[2] == 3)
            {
                count += n - j;
                break;
            };
        }
    }

    return count;
}

// time - O(n)
// space - (1)
int numberOfSubstrings(string s)
{
    int n = s.size();
    int count = 0;
    vector<int> lastSeen(3, -1);

    for (int i = 0; i < n; i++)
    {
        lastSeen[s[i] - 'a'] = i;
        count += 1 + min(lastSeen[0], min(lastSeen[1], lastSeen[2]));
    }

    return count;
}

int main()
{
    string s = "aaacb";
    int res = numberOfSubstrings(s);
    cout << res << endl;
    return 0;
}