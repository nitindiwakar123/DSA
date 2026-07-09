#include <iostream>
#include <stdio.h>
#include <cmath>
#include <unordered_map>
using namespace std;

int getLongestSubstring(string str) {
    int n = str.size();
    int maxLen = 0;
    unordered_map<char, int>hashmap;
    int left = 0;
    
    for (int right = 0; right < n; right++) {
        if(hashmap[str[right]] >= left && hashmap[str[right]] != -1) {
            left = hashmap[str[right]] + 1;
        }

        // cout<<hashmap<<endl;
        int tempLen = right-left+1;
        if(tempLen > maxLen) {
            maxLen = tempLen;
        }
        hashmap[str[right]] = right;
    }

    return maxLen;
}

int main()
{
    string myStr = "dfkd";
    int res = getLongestSubstring(" ");
    cout<<res<<endl;
}