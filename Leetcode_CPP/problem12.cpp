#include <iostream>
#include <stdio.h>
#include <unordered_map>
#include <vector>
using namespace std;

// string lookup(int n)
// {
//     switch (n)
//     {
//     case 1:
//         return "I";
//     case 2:
//         return "II";
//     case 3:
//         return "III";
//     case 4:
//         return "IV";
//     case 5:
//         return "V";
//     case 6:
//         return "VI";
//     case 7:
//         return "VII";
//     case 8:
//         return "VIII";
//     case 9:
//         return "IX";
//     case 10:
//         return "X";
//     case 20:
//         return "XX";
//     case 30:
//         return "XXX";
//     case 40:
//         return "XL";
//     case 50:
//         return "L";
//     case 90:
//         return "XC";
//     case 100:
//         return "C";
//     case 200:
//         return "CC";
//     case 300:
//         return "CCC";
//     case 400:
//         return "CD";
//     case 500:
//         return "D";
//     case 900:
//         return "CM";
//     case 1000:
//         return "M";
//     case 2000:
//         return "MM";
//     case 3000:
//         return "MMM";

//     default:
//         break;
//     }
// }

// Time O(1)
// Space O(1)
string intToRoman(int num)
{
    vector<string> ones = {"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};
    vector<string> tens = {"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"};
    vector<string> hns = {"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"};
    vector<string> ths = {"", "M", "MM", "MMM"};
 
    
    return ths[num / 1000] + hns[(num%1000) / 100] + tens[(num % 100) / 10] + ones[num % 10];
}

int main()
{
    string res = intToRoman(3999);
    cout<<res<<endl;
    return 0;
}