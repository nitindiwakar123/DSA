#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

// brute 
// time - O(n+k) k = length of tempStr
// space - O(1)

bool isPalindrome(string s)
{
    string tempStr;

    for (int i = 0; i < s.size(); i++)
    {
        char c = tolower(s[i]);

        if (c >= '0' && c <= '9' || c >= 'a' && c <= 'z')
            tempStr += c;
    }

    string og = tempStr;
    int right = tempStr.size() - 1;

    for (int left = 0; left < right; left++)
    {
        char c = tempStr[left];
        tempStr[left] = tempStr[right];
        tempStr[right] = c;
        right--;
    }

    return tempStr == og;
}



int main()
{
    string s = "A man, a plan, a canal: Panama";
    bool res = isPalindrome(s);
    cout << res << endl;
    return 0;
}