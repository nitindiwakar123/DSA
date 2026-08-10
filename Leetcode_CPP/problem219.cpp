#include <iostream>
#include <stdio.h>
#include <vector>
#include <cmath>
#include <unordered_map>
#include <set>
using namespace std;

// brute(tle)
//  time - O(n*n)
//  space - O(1)
bool containsNearbyDuplicate(vector<int> &nums, int k)
{
    int n = nums.size();

    for (int i = 0; i < n; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (nums[i] == nums[j] && abs(i - j) <= k)
                return true;
        }
    }

    return false;
}

// Optimal - 2
// time - O(n)
// space - O(k)
bool containsNearbyDuplicate(vector<int> &nums, int k)
{
    int n = nums.size();
    set<int> seen;

    int left = 0;
    for (int right = 0; right < n; right++)
    {
        if (abs(left - right) > k)
        {
            seen.erase(nums[left]);
            left++;
        }

        if (seen.count(nums[right]))
            return true;

        seen.insert(nums[right]);
    }

    return false;
}

// time - O(n)
// space - O(n)
bool containsNearbyDuplicate(vector<int> &nums, int k)
{
    int n = nums.size();
    unordered_map<int, int> hashmap;

    for (int i = 0; i < n; i++)
    {
        int val = hashmap[nums[i]];

        if (val >= 1 && abs((val - 1) - i) <= k)
            return true;

        val = i + 1; // mapping cause hashmap returns 0 if key does'nt exists so we have to map the indexs from 1

        hashmap[nums[i]] = val;
    }

    return false;
}

int main()
{
    return 0;
}