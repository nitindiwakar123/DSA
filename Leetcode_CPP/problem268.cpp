#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

int missingNumber(vector<int> &nums)
{
    int n = nums.size();
    int XOR1 = 0;
    int XOR2 = 0;

    for (int i = 0; i < n; i++) {
        XOR1 ^= i+1;
        XOR2 ^= nums[i];
    }

    return XOR1 ^ XOR2;
}

int main()
{
    vector<int> nums = {3,0,1};
    int res = missingNumber(nums);
    cout<<res<<endl;
}