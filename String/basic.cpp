#include <iostream>
#include <stdio.h>
#include <vector>
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

string removeStars(string &s)
{
    string res;

    for (int i = 0; i < s.size(); i++)
    {
        char c = s[i];
        if (c != '*')
            res += c;
        else
        {
            res.pop_back();
        }
    }

    return res;
}

string removeDuplicates(string &s)
{
    string ans;

    for (int i = 0; i < s.size(); i++)
    {
        char c = s[i];
        if (ans.size() == 0 || c != ans[ans.size() - 1])
            ans.push_back(c);
        else
            ans.pop_back();
    }

    return ans;
}

bool validParanthesis(string &s)
{
    string ans;

    for (int i = 0; i < s.size(); i++)
    {
        char c = s[i];
        if (c == '[' || c == '{' || c == '(')
        {
            ans.push_back(c);
        }
        else if (c == ']' || c == '}' || c == ')')
        {
            char op = ans[ans.size() - 1];
            if (ans.size() == 0)
            {
                return false;
            }
            else if (c == ']' && op != '[' || c == '}' && op != '{' || c == ')' && op != '(')
                return false;
        }
    }

    return true;
}

bool validParanthesis2(string &s)
{
    string ans;

    for (int i = 0; i < s.size(); i++)
    {
        char c = s[i];
        if (c == '[' || c == '{' || c == '(')
        {
            ans.push_back(c);
        }
        else if (c == ']' || c == '}' || c == ')')
        {
            char op = ans[ans.size() - 1];
            if (ans.size() == 0)
            {
                return false;
            }
            else if (c == ']' && op != '[' || c == '}' && op != '{' || c == ')' && op != '(')
                return false;
        }
    }

    return true;
}

int countToMakeValid(string s)
{
    int op = 0;
    int insert = 0;

    for (int i = 0; i < s.size(); i++)
    {
        char c = s[i];
        if (c == '(')
        {
            op++;
        }
        else
        {
            if (op == op++)
                insert++;
            else
                op--;
        }
    }

    return op + insert;
}

void rotateClockwise(string &s)
{
    int n = s.size();
    char c1 = s[n - 2];
    char c2 = s[n - 1];
    for (int i = n - 3; i >= 0; i--)
    {
        s[i + 2] = s[i];
    }
    s[0] = c1;
    s[1] = c2;
}

void rotateAntiClockwise(string &s)
{
    int n = s.size();
    char c1 = s[0];
    char c2 = s[1];
    for (int i = 2; i < n; i++)
    {
        s[i - 2] = s[i];
    }
    s[n - 2] = c1;
    s[n - 1] = c2;
}

bool isRotated(string &s1, string &s2)
{
    string clockwise = s1, antiClockwise = s1;

    rotateClockwise(clockwise);
    // rotateClockwise(clockwise);

    if (clockwise == s2)
        return true;

    rotateAntiClockwise(antiClockwise);
    // rotateAntiClockwise(antiClockwise);
    if (antiClockwise == s2)
        return true;

    return false;
}

string sortString(string &s)
{
    int n = s.size();
    vector<int> hash(26, 0);

    for (int i = 0; i < n; i++)
    {
        hash[s[i] - 'a']++;
    }

    s = "";
    for (int i = 0; i < 26; i++)
    {
        while (hash[i] > 0)
        {
            char c = i + 'a';
            s += c;
            hash[i]--;
        }
    }
   
    return s;
}

int main()
{
    // string str = "nitin is \"Nitin\"";
    // string str = "\\";
    // string str;
    // getline(cin, str);
    // cout<<str<<endl;

    // string s1 = "amazon", s2 = "azonam";
    // bool res = isRotated(s1, s2);
    // cout << res << endl;

    string s1 = "aaaaedddddcab";
    string res = sortString(s1);
    cout << res << endl;

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