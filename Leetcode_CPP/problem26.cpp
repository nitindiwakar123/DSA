#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

 int removeDuplicates(vector<int>& nums) {
        int n = nums.size();
        int i;
        for (i = 0; i < n - 1; i++) {
            int j = i + 1;
            while (j < n - 1) {
                if (nums[i] == nums[j]) {
                    int temp = nums[j];
                    nums[j] = nums[j+1];
                    nums[j+1] = temp;
                } else j++;
            }
        }

        return i;
    }

int main()
{
    vector<int> nums = {1,1,2};
    int result = removeDuplicates(nums);
    cout<<result<<endl;
    return 0;
}