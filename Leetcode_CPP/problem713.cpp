#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

int numSubarrayProductLessThanK(vector<int> &nums, int k)
{
    int n = nums.size();
    int count = 0;

    for (int i = 0; i < n; i++)
    {
        int product = 1;
        for (int j = i; j < n; j++)
        {
            product *= nums[i];
            if(product >= k) break;
            count++;
        }
    }

    return count;
}

int main()
{
    vector<int> nums = {10, 5, 2, 6};
    int ans = numSubarrayProductLessThanK(nums, 100);

    cout<<ans<<endl;
    
    return 0;
}