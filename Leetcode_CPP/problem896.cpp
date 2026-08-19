#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

bool isMonotonic(vector<int> &nums)
{
    bool isInc = true;
    bool isDec = true;

    for (int i = 0; i < nums.size() - 1; i++)
    {
        if (nums[i] > nums[i + 1])
            isInc = false;
        else if (nums[i] < nums[i + 1])
            isDec = false;
    }

    return isInc || isDec;
}

int main()
{

    return 0;
}