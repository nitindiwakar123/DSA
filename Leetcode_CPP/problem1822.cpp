#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

int arraySign(vector<int> &nums)
{
    int negativesCount = 0;

    for (int i = 0; i < nums.size(); i++)
    {
        if(nums[i] == 0) return 0;
        if(nums[i] < 0)
        negativesCount++;
    }

    return negativesCount % 2 == 0? 1: -1;
    
}

int main()
{
    return 0;
}