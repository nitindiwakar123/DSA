#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

int getGCD(int a, int b) {
    int divident = a > b? a: b;
    int divisor = a < b? a: b;

    while (divisor != 0)
    {
        int rem = divident % divisor;
        divident = divisor;
        divisor = rem;
    }
    
    return divident;
}

int findGCD(vector<int> &nums)
{
    int smallest = 1000;
    int biggest = 0;

    for (int i = 0; i < nums.size(); i++)
    {
        if (nums[i] < smallest)
            smallest = nums[i];
        
        if (nums[i] > biggest)
            biggest = nums[i];
    }

    return getGCD(smallest, biggest);
}

int main()
{
    vector<int> nums = {10, 6, 9};
    findGCD(nums);
    return 0;
}
