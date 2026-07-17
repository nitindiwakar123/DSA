#include <iostream>
#include <stdio.h>
#include <vector>
#include <algorithm>
using namespace std;

// brute
// int maxArea(vector<int> &height)
// {
//     int n = height.size();
//     int maxAmt = 0;
//     for (int i = 0; i < n; i++)
//     {
//         for (int j = i+1; j < n; j++)
//         {
//             int res = min(height[i], height[j]) * (j - i);
//             if (maxAmt < res)
//                 maxAmt = res;
//         }
//     }
// cout<<maxAmt<<endl;
//     return maxAmt;
// }

// optimal
int maxArea(vector<int> &height)
{
    int n = height.size();
    int maxAmt = 0;
    int i = 0;
    int j = n - 1;

    while (i < j)
    {
        int res = min(height[i], height[j]) * (j - i);

        if (maxAmt < res)
            maxAmt = res;

        if (height[i] < height[j])
            i++;
        else
            j--;
    }

    return maxAmt;
}

int main()
{
    vector<int> arr = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    int res = maxArea(arr);
    cout << res << endl;
    return 0;
}