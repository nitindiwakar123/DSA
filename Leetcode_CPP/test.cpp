#include <iostream>
#include <stdio.h>
#include <vector>
#include <set>
#include <unordered_map>
using namespace std;

int totalFruit(vector<int> &fruits)
{
    int n = fruits.size();
    int maxLength = 0, left = 0, right = 0;
    unordered_map<int, int> hashmap;

    while (right < n)
    {
        hashmap[fruits[right]]++;

        while (hashmap.size() > 2)
        {
            if (hashmap[fruits[left]] > 0)
            {
                hashmap[fruits[left]]--;
                left++;
            }
            else
            {
                hashmap.erase(fruits[left]);
            }
        }

        maxLength = max(maxLength, right - left + 1);

        right++;
    }

    return maxLength;
}


void Reverse(vector<int> &nums, int start, int end)
{
    while (start < end)
    {
        int temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;

        start++;
        end--;
    }
}

int main()
{
    vector<int> nums = {1, 2, 3, 4, 5};
    Reverse(nums, 0, nums.size()-1);
    Reverse(nums, 0, 1);
    Reverse(nums, 2, nums.size()-1);
    for (int i = 0; i < nums.size(); i++)
    {
        cout << nums[i] << endl;
    }

    return 0;
}