#include <iostream>
#include <stdio.h>
#include <unordered_map>
using namespace std;

int romanToInt(string s)
{
    unordered_map<char, int> hashmap = {
        {'I', 1},
        {'V', 5},
        {'X', 10},
        {'L', 50},
        {'C', 100},
        {'D', 500},
        {'M', 1000},
    };

    int ans = 0;
    for (int i = 0; i < s.size() - 1; i++)
    {
        if (hashmap[s[i]] < hashmap[s[i + 1]])
            ans -= hashmap[s[i]];
        else
            ans += hashmap[s[i]];
    }

    ans += hashmap[s[s.size() - 1]];

    return ans;
}

int main()
{
    return 0;
}