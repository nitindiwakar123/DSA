#include <iostream>
#include <stdio.h>
using namespace std;

void reverseStr(string &str)
{
    int start = 0, end = str.size() - 1;

    while (start < end)
    {
        swap(str[start], str[end]);
        start++;
        end--;
    }
}

bool isPalindrome(string &str)
{
    int start = 0, end = str.size() - 1;
    while (start < end)
    {
        if (str[start] != str[end])
        {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

int getStrLength(string &str)
{
    int n = 0;

    while (str[n] != '\0')
    {
        n++;
    }

    return n;
}

int main()
{
    // string str = "nitin is \"Nitin\"";
    // string str = "\\";
    // string str;
    // getline(cin, str);
    // cout<<str<<endl;

    string s1 = "nitin", s2 = "Diwakar";
    reverseStr(s2);
    cout << s2 << endl;
    bool res = isPalindrome(s1);
    bool res2 = isPalindrome(s2);
    int s1Length = getStrLength(s1);
    int s2Length = getStrLength(s2);

    // cout << res << endl;
    // cout << res2 << endl;
    // cout << s1Length << endl;
    // cout << s2Length << endl;
    // string s3 = s1+ " " + s2;
    // string s3 = s1.append(s2);
    // cout<<s3<<endl;
    // s1 = s1 + 'p';
    // s1.push_back("sss"); // error
    // s1 = s1 + "pgu";
    // cout<<s1<<endl;

    // str.push_back('g');
    // cout<<str<<endl;
    // str.pop_back();
    // cout<<str<<endl;
}