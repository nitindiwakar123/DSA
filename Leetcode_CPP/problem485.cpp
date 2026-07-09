#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

// optimal
// time- O(n)
// space - O(1)

int findMaxConsecutiveOnes(vector<int> &nums) {
    int count = 0;
    int max = 0;
    for (int i = 0; i < nums.size(); i++) {
        if(nums[i] == 0) {
            count = 0;
            continue;
        }

        count++;

        if(count > max) {
            max = count;
        }
    }

    return max;
}

int main() {
    vector<int> nums = {1, 1, 0, 1, 1, 1, 0, 1, 1};
    int res = findMaxConsecutiveOnes(nums);
    cout<<res<<endl;
    return 0;
}
