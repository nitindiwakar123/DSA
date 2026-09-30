#include <iostream>
#include <stdio.h>
using namespace std;

string largeOddNum(string &s)
{
    int n = s.size();

    int left = 0;
    while (s[left] == '0') left++;

    for(int right = n-1; right>=left; right--) {
        int lastDigit = int(s[right]) - '0';

        if(lastDigit % 2 != 0) {
            return s.substr(left, right-left+1);
        }
    }

    return "";
}

int main()
{
    string str = "nitin";
    int i = 0;
    int j = 2;
    return 0;
}